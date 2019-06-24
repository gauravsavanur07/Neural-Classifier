let trainedNet;

function encode(net){
    return arguments.split('').map( x => (x.charCodeAt(0)/256));
}

function processTrainingData(data){
    return data.map( d=> {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data){
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
}


function execute(input){
    let results = trainedNet(encode(input));
    console.log(results)
    let output;
    let certainity;
    if(results.trump > results.kardashian){
        output = 'Donald Trump'
        certainity = Math.floor(results.trump * 100 )
    }
    else{
        output = 'Kim Kardashian'
        certainity = Math.floor(results.kardashian * 100)
    }
    return "I'm " + certainty + "% sure that tweet was written by " + output;
}
train(trainingData);
console.log(execute("Paste Your Tweet Here "));