Moralis.Cloud.afterSave("theSandboxLandTransfer", async (request) => {
    const logger = Moralis.Cloud.getLogger();
     logger.error("theSandboxLandTransfer : "+ request.object.get("transaction_hash"));
});