exports = async function() {
  
    console.log("start _log_1");
    const coll = context.services.get("DemoCluster").db("BondTest3").collection("msg");
    
    //pick latest 
    let date_range = {"Header.DateTimeStamp": {$gte: new Date("2022-01-01") ,$lte: new Date("2022-12-31")}};
    let cursor = await coll.find(date_range).toArray();
    
    cursor.forEach(function(x){
        console.log("each 1");
        let evt = x.Header.Event;
        console.log(evt);
        
        const transactions = context.services.get("DemoCluster").db("BondTest").collection(evt);
      
        console.log("Fetch Record/Events");
        
        transactions.insertOne(x);
        
        console.log("Event classified to respective collection");
        
    });
  
    return true;
    
  };
  