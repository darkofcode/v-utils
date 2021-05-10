function btoa(str) {
  return Buffer.from(str).toString("base64");
}

export { btoa };
