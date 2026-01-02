import Head from "next/head";
import Layout from "@/components/common/layout";
import Link from "next/link";
import { BackgroundBeams } from "../../components/backgrounds/background-beams";

const stepsShort = [
  {
    title: "CRC official VS Code guide",
    body: (
      <>
        Follow the CRC-maintained instructions here:{" "}
        <a
          href="https://crc-pages.pitt.edu/user-manual/slurm/vscode/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 underline"
        >
          https://crc-pages.pitt.edu/user-manual/slurm/vscode/
        </a>
        .
      </>
    ),
  },
  {
    title: "Install VS Code (local, one time)",
    body: (
      <>
        Install Visual Studio Code from{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 underline"
        >
          https://code.visualstudio.com/
        </a>
        .
      </>
    ),
  },
  {
    title: "Install Remote Development extension",
    body: (
      <>
        Install the Remote Development extension pack from{" "}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 underline"
        >
          this link
        </a>{" "}
        or via the VS Code Extensions panel.
      </>
    ),
  },
  {
    title: "SSH config on your laptop",
    body: (
      <>
        Edit <code>~/.ssh/config</code> and add entries for{" "}
        <code>htc</code>, <code>htcx</code>, and <code>gpux</code> with your
        Pitt ID in <code>User &lt;name&gt;</code>.
      </>
    ),
  },
  {
    title: "Generate SSH keys (local)",
    body: (
      <>
        Run <code>ssh-keygen -t rsa</code> and then{" "}
        <code>ssh-copy-id htc</code> to enable passwordless SSH to the CRC
        login node.
      </>
    ),
  },
  {
    title: "One-time login-node setup",
    body: (
      <>
        On <code>htc</code>: <code>chmod 755 ~</code>,{" "}
        <code>ssh-keygen</code>, then{" "}
        <code>cd ~/.ssh; cat id_rsa.pub &gt;&gt; authorized_keys</code>.
      </>
    ),
  },
  {
    title: "Create tunnel job script",
    body: (
      <>
        Create a Slurm script (for example <code>cpu.sh</code>) on CRC that
        starts <code>sshd</code> on a compute node with job name matching{" "}
        <code>tunnel_cpu</code>.
      </>
    ),
  },
  {
    title: "Run and connect (every time)",
    body: (
      <>
        <span className="block">
          1. From laptop: <code>ssh htc</code>.
        </span>
        <span className="block">
          2. On login node: <code>sbatch cpu.sh</code>.
        </span>
        <span className="block">
          3. In VS Code Remote-SSH, connect to <code>htcx</code>,{" "}
          <code>gpux</code>, etc., once the job is running.
        </span>
      </>
    ),
  },
];

const sshConfigBlock = `Host htc
  ControlMaster auto
  ControlPath ~/.ssh/master-%r@%h:%p
  HostName htc.crc.pitt.edu
  User <name>

Host htcx
  ProxyCommand ssh htc 'nc $(squeue --me --name=tunnel_cpu --states=R -h -O NodeList,Comment)'
  StrictHostKeyChecking no
  User <name>

Host gpux
  ProxyCommand ssh htc "nc $(squeue --me --name=tunnel_gpu --states=R -h -O NodeList,Comment -M gpu)"
  StrictHostKeyChecking no
  User <name>`;

const cpuScriptBlock = `#!/bin/bash
#SBATCH --output="tunnel.log"
#SBATCH --job-name="tunnel_cpu"   # must match --name in ssh config
#SBATCH --cpus-per-task=2
#SBATCH --time=0-10:00:00         # 10 hour session

module load python/ondemand-jupyter-python3.8  # load modules

# find open port
PORT=$(python -c 'import socket; s=socket.socket(); s.bind(("", 0)); print(s.getsockname()[1]); s.close()')
scontrol update JobId="$SLURM_JOB_ID" Comment="$PORT"

# start sshd server on the available port
echo "Starting sshd on port $PORT"
# make sure id_rsa exists in ~/.ssh
/usr/sbin/sshd -D -p ${PORT} -f /dev/null -h ${HOME}/.ssh/id_rsa`;

const gpuDirectivesBlock = `#SBATCH --nodes=1
#SBATCH --gres=gpu:1
#SBATCH --cluster=gpu
#SBATCH --partition=a100,a100_nvlink,gtx1080`;

export default function CRCVSCodeSetup() {
  return (
    <>
      <Head>
        <title>VS Code on CRC HTC</title>
        <meta
          name="description"
          content="How to run VS Code on CRC HTC and GPU clusters via Slurm tunnels."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundBeams className="fixed inset-0 -z-10" />

      <Layout>
        <section className="py-6 md:py-10 lg:py-12 max-w-4xl mx-auto">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-500 text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-6 font-bold tracking-tight">
            VS Code on CRC (HTC & GPU)
          </h2>

          {/* Why VS Code */}
          <div className="mt-4 md:mt-6 mb-6 md:mb-8 space-y-3 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
            <h3 className="text-lg md:text-xl font-semibold">
              Why VS Code?
            </h3>
            <p>
              Because it is the best editor out there. You can run R, Python,
              JavaScript, and Jupyter notebooks, all inside a single editor,
              with rich extensions and strong community support.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Run R, Python, and JavaScript in one environment.</li>
              <li>First-class support for notebooks (Python, R, etc.).</li>
              <li>
                Extensions for GitHub Copilot, auto-formatting, linting, and
                code cleaning.
              </li>
              <li>
                Great theming, syntax highlighting, and online documentation.
              </li>
              <li>
                Works on any CRC cluster (HTC, GPU, SMP, MPI), not just
                OnDemand.
              </li>
            </ul>
            <p className="italic text-neutral-700 dark:text-neutral-300">
              Your coding time will allegedly decrease by ~55% with Copilot
              (their claim, not mine).
            </p>
          </div>

          {/* Short version */}
          <div className="border border-neutral-200/70 dark:border-neutral-800/80 rounded-xl bg-white/70 dark:bg-neutral-900/60 p-4 md:p-5 mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              TL;DR: Short version of steps
            </h3>
            <p className="mb-3 text-sm md:text-base">
              If you do not care about the why and are impatient: cheers! Here
              is the shortest possible version of steps.
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              {stepsShort.map((s) => (
                <li key={s.title}>
                  <span className="font-semibold">{s.title}:</span>{" "}
                  <span>{s.body}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CRC official link */}
          <p className="mb-8 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
            CRC&apos;s official VS Code guide (highly recommended for reference):{" "}
            <a
              href="https://crc-pages.pitt.edu/user-manual/slurm/vscode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline"
            >
              https://crc-pages.pitt.edu/user-manual/slurm/vscode/
            </a>
            .
          </p>

          {/* Longer version */}
          <div className="space-y-6 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
            <h3 className="text-lg md:text-xl font-semibold">
              Longer version with explanation
            </h3>

            {/* 1. Install VS Code */}
            <div>
              <h4 className="font-semibold mb-1">1. Install VS Code (local)</h4>
              <p>
                Install Visual Studio Code from{" "}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline"
                >
                  https://code.visualstudio.com/
                </a>
                . The goal is to do everything inside VS Code as a one-stop
                editor/terminal.
              </p>
            </div>

            {/* 2. Remote extension */}
            <div>
              <h4 className="font-semibold mb-1">
                2. Install Remote Development Extension
              </h4>
              <p className="mb-1">
                Install the Remote Development extension pack from{" "}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline"
                >
                  this link
                </a>{" "}
                or from within VS Code:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open VS Code and click the Extensions icon (left pane).</li>
                <li>Search for “Remote Development”.</li>
                <li>Click Install.</li>
              </ul>
            </div>

            {/* 3. SSH config */}
            <div>
              <h4 className="font-semibold mb-1">
                3. SSH configuration (local machine)
              </h4>
              <p className="mb-2">
                SSH configuration lets your laptop connect to the CRC login
                node, and then from login node to a compute node. Once this is
                set up, VS Code can attach directly to the compute node where
                your job is running.
              </p>
              <p className="mb-2">
                Edit <code>~/.ssh/config</code> and add:
              </p>
              <pre className="whitespace-pre overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 text-xs md:text-sm p-3 mb-2">
                {sshConfigBlock}
              </pre>
              <p className="mb-1">
                Replace <code>&lt;name&gt;</code> with your Pitt username.
              </p>
              <p className="mb-1">
                In short, <code>htc</code> is the login node;{" "}
                <code>htcx</code> and <code>gpux</code> use{" "}
                <code>ProxyCommand</code> plus Slurm to find the compute node
                where your job called <code>tunnel_cpu</code> or{" "}
                <code>tunnel_gpu</code> is running.
              </p>
              <p className="mb-1">
                You can similarly add <code>smpx</code> and <code>mpix</code> if
                you want to run VS Code on SMP or MPI clusters as well.
              </p>
            </div>

            {/* 4. SSH keys */}
            <div>
              <h4 className="font-semibold mb-1">
                4. Generate SSH key pair (local & login node)
              </h4>
              <p className="mb-2">
                SSH keys act as a &quot;machine password&quot; so you are not
                prompted for your Pitt password every time.
              </p>
              <p className="mb-1 font-medium">On your local machine:</p>
              <pre className="whitespace-pre overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 text-xs md:text-sm p-3 mb-2">
{`ssh-keygen -t rsa   # follow on-screen instructions
ssh-copy-id htc      # uses the "htc" alias defined in ~/.ssh/config`}
              </pre>
              <p className="mb-1 font-medium">
                On the CRC login node (<code>htc</code>, one time only):
              </p>
              <pre className="whitespace-pre overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 text-xs md:text-sm p-3 mb-2">
{`chmod 755 ~
ssh-keygen           # follow on-screen instructions
cd ~/.ssh
cat id_rsa.pub >> authorized_keys`}
              </pre>
              <p className="mb-1">
                Do not add write permissions for group/others on your home
                directory, or passwordless SSH will fail.
              </p>
            </div>

            {/* 5. Slurm script */}
            <div>
              <h4 className="font-semibold mb-1">
                5. Create Slurm script to start VS Code tunnel
              </h4>
              <p className="mb-2">
                You need a running job on a compute node (HTC or GPU) to attach
                VS Code to. The job name must exactly match what you used in{" "}
                <code>--name</code> in the SSH config.
              </p>
              <p className="mb-1">
                Example <code>cpu.sh</code> for HTC:
              </p>
              <pre className="whitespace-pre overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 text-xs md:text-sm p-3 mb-2">
                {cpuScriptBlock}
              </pre>
              <p className="mb-1">
                For GPU jobs, you can add directives like:
              </p>
              <pre className="whitespace-pre overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 text-xs md:text-sm p-3 mb-2">
                {gpuDirectivesBlock}
              </pre>
              <p className="mb-1">
                This way Slurm will consider multiple partitions (e.g.{" "}
                <code>a100</code>, <code>a100_nvlink</code>,{" "}
                <code>gtx1080</code>) instead of only the default one. GPU
                nodes also have CPUs, so if necessary you can run CPU-only jobs
                on GPU/SMP/MPI clusters when HTC is overloaded.
              </p>
              <p className="mb-1">
                For full hardware details, see{" "}
                <a
                  href="https://crc.pitt.edu/overview-crc-services/computing-hardware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline"
                >
                  CRC computing hardware overview
                </a>
                .
              </p>
            </div>

            {/* 6. Every time: connect */}
            <div>
              <h4 className="font-semibold mb-1">
                6. Every time you want a VS Code session
              </h4>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  From your laptop terminal: <code>ssh htc</code>.
                </li>
                <li>
                  On the login node: <code>sbatch cpu.sh</code> (or your GPU
                  script).
                </li>
                <li>
                  Wait until the job is in the <code>R</code> (running) state.
                </li>
                <li>
                  In VS Code, open the Remote-SSH menu and connect to{" "}
                  <code>htcx</code>, <code>gpux</code>, <code>smpx</code>,{" "}
                  <code>mpix</code>, etc., depending on where the job was
                  submitted.
                </li>
              </ol>
              <p className="mt-2">
                VS Code will attach to the compute node backing that job, and
                you can run terminals, notebooks, R, Python, etc., directly on
                CRC from your editor.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
