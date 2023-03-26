const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partition key that was provided", () => {
    const event = { partitionKey: 'my-key' };
    expect(deterministicPartitionKey(event)).toBe('my-key');
  });

  it("Returns a partition key generated from event data when the partition key was not provided", () => {
    const event = { id: 'abc123', value: 42 };
    expect(deterministicPartitionKey(event)).toBe("82cb5a0f7f0e9a0c1799d0d37842f95c5d7ac8c34a7d6f9497f5c734980bed60abf6979369d3d3af9835ae0da115a33457b3e3727adf3a98c62f0fe3a67f7601");
  });

  it("Returns a partition key by checking that it is not a string and converting it to a JSON object", () => {
    const event = { id: 123, value: true };
    expect(deterministicPartitionKey(event)).toBe("2d84fb466aa471c9d098f72a2ac14ba6c852172f439a3759ff20e5ccedb4ddd4df6bd9ed8f68835c4b52cd7905e306c9c708aff3da1a633fd3776d6e1a77fb11");
  });

  it("You should generate a shorter partition key by hashing the candidate when it exceeds the maximum length", () => {
    const longKey = 'a'.repeat(300);
    const event = { partitionKey: longKey };
    expect(deterministicPartitionKey(event)).toHaveLength(128);
  });
});
