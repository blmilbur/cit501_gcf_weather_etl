const csv = require("csv-parser")

exports.readObservation = (file, context) => {
    console.log(`  Event: ${context.eventId}`);
    console.log(`  Event Type: ${context.eventType}`);
    console.log(`  Bucket: ${file.bucket}`);
    console.log(`  File: ${file.name}`);
    console.log`${file.createReadStream()}`
}