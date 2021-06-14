let student = {
	name: 'jakdu',
	course: 'getting started with typescript',
	codeingIQ: 80,
	code: function () {
		console.log('brain is working hard');
	}
}

function calculatedCodingIQ(lostPoints) {
	return 100 - lostPoints
}

// lostPoints 애 마우스를 over 하게 되면 , 
// lostPoints : any ) : number 가 나오게 되는데 , any 는 아무런 설정을 해주지 않아서 ,any 로 받게되고 , 
// return 100 - lostPoints 로 인해서 반환값이 number 로 타입추론하게 된다.
