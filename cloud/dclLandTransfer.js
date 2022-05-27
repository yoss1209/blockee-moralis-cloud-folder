Moralis.Cloud.afterSave("dclLandTransfer", async (request) => {
    const logger = Moralis.Cloud.getLogger();
     logger.error("dclLandTransfer : "+ request.object.get("transaction_hash"));
});