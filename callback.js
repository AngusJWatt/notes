const myArray = [{ value: 'foo' }, { value: 'bar' }];
const getValues = () => {
	setTimeout(() => {
		const output = [];
		myArray.forEach((obj) => {
			output.push(obj.value);
		});
		console.log(output);
	}, 1000);
};
const addObject = (object) => {
	setTimeout(() => {
		myArray.push(object);
	}, 1000);
};

async function init() {
	getValues();
	await addObject({ value: 'baz' });
	getValues();
};

init();
