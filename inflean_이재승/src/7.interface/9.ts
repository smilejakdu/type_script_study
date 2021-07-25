export { };

interface GetText {
	(name: string, age: number): string;
	totalCall?: number;
}

const getText: GetText = function (name, age) {
	if (getText.totalCall !== undefined) {
		getText.totalCall += 1;
		console.log(`totalCall : ${getText.totalCall} `);
	}
	return '';
};

getText.totalCall = 0;
getText('', 0); // totalCall : 1 
getText('',0); // totalCall : 2 
