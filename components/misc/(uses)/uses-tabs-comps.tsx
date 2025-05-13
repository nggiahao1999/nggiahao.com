const EverydayTabData = [
  {
    key: "Laptop",
    desc: "Macbook Pro M1 14\" 2021 + 16 GB RAM + 1TB SSD",
  },
  {
    key: "Monitor",
    desc: "Samsung (21 inch)",
  },
];

export const EverydayTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Everyday</h1>

      {EverydayTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const SoftwareTabData = [
  {
    key: "OS",
    desc: "MacOS + Ubuntu + Rocky Linux",
  },
  {
    key: "DNS",
    desc: "Cloudflare",
  },
  {
    key: "Terminal",
    desc: "Terminal + Termius Pro",
  },
  {
    key: "Text Editor",
    desc: "Vim + VSCode",
  },
  {
    key: "Video Streaming",
    desc: "VLC",
  },
  {
    key: "Music",
    desc: "Spotify",
  },
  {
    key: "Notes",
    desc: "Notes",
  },
  {
    key: "Password Manager",
    desc: "Google Password Manager + ICloud Passwords",
  },
];

export const SoftwareTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Software</h1>

      {SoftwareTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const BrowserTabData = [
  {
    desc: "JSON Viewer",
  },
  {
    desc: "Add Block",
  },
  {
    desc: "SimilarWeb",
  },
  {
    desc: "Ahrefs SEO Toolbar",
  },
  {
    desc: "Proxy Switcher",
  },
  {
    desc: "User-Agent Switcher",
  },
  {
    desc: "Multi ElasticSearch Heads",
  },
  {
    desc: "Octotree",
  },
  {
    desc: "SupperX - Twitter Analytics",
  },
];

export const BrowserTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Browser</h1>
      <p className="pb-5">
        I use <code>Google Chrome</code> as my primary browser, along
        with following extensions:
      </p>
      {BrowserTabData.map((data, i) => (
        <div key={i}>
          <p>
            <span>{i + 1}. </span>
            <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
          </p>
        </div>
      ))}
    </div>
  );
};


