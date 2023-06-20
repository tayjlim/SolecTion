

function randomKeys(obj){

const keys = Object.Keys(obj)

const randomKeys = [];

        while (randomKeys.length < 5) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];

        if (!randomKeys.includes(randomKey)){
            randomKeys.push(randomKey);
        }

        }

        return randomKeys;

}

export default randomKeys;
