function validateForm(formInfo: { [key: string]: string }) {
	for (const value in formInfo) {
		if (!formInfo[value]) {
			return {
				isValid: false,
				message: 'Field Empty ! Make sure to fill in all of them ',
			};
		}
	}

	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(formInfo.email)) {
		return {
			isValid: false,
			message: 'Invalid E-mail format, Please check it',
		};
	}

	return {
		isValid: true,
		message: '',
	};
}

export default validateForm;
