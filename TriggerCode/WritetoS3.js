exports = function() {
  
    const collection = context.services.get("ForBond").db("Database0").collection("Collection0");
  
    const aggpipe = [{
         '$out': {
          's3': {
           'bucket': 'ghevde.messages',
           'region': 'us-east-2',
           'filename':  { "$concat": [ "organize5/", { "$toString": "$Header.Event"},"/"] } ,
           'format': {
            'name': 'csv'
           }
          }
         }
        }];
        
    console.log(JSON.stringify(aggpipe));
    const doc2 = collection.aggregate(aggpipe);
    
    return doc2;
}  