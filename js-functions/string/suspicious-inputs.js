/**
 * @typedef {Object} sus
 * @property {string} category
 * @property {string[]} patterns
 */

/**
 * @type {sus[]}
 */
const suspiciousInput = [
  {
    category: "Path Traversal",
    patterns: [
      "../",
      ".%00.",
      "..%01",
      "%5C..",
      ".%2e",
      "%2e.",
      "..\\",
      "/etc/hosts",
      "/etc/passwd",
      "/etc/shadow",
      "/etc/issue",
      "Windows/System32/cmd.exe",
      "Windows\\System32\\cmd.exe",
      "c+dir+c:\\",
      "\\windows\\system32\\drivers\\etc\\hosts",
      "config.inc.php",
    ],
  },
  {
    category: "Reflected XSS",
    patterns: [
      "<script",
      "\\x3cscript",
      "%3cscript",
      "alert(",
      "onclick",
      "onerror",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onmouseout",
      "onmouseover",
      "onload",
      "document.cookie",
      ".addeventlistener",
      // "javascript",
      "jav&#x0D;ascript:",
      "java\0script",
    ],
  },
  {
    category: "SQL Injection",
    patterns: [
      "' or '1'='1",
      "or 'x'='x'",
      "or 1=1",
      '" or "1"="1',
      '" or ""=""',
      "' or ''=''",
      "DROP TABLE",
      "INSERT INTO",
      "drop",
      "table",
      "insert",
      "into",
    ],
  },
  {
    category: "NoSQL Injection",
    patterns: ["$gt", "$ne", "$regex", "$where", "$eq", "$lt", "$nin", "$exists"],
  },
];

export { suspiciousInput };
