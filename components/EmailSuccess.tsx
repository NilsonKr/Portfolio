import React from 'react';

import SuccessIcon from './SVGIcons/success';
import EmailSuccessStyled from 'styles/styledComponents/EmailSuccess';

const EmailSuccess = () => {
	return (
		<EmailSuccessStyled>
			<div className='icon'>
				<SuccessIcon size={'25'} color='#fff' />
			</div>
			<p>E-mail Sended, Thank You !</p>
		</EmailSuccessStyled>
	);
};

export default EmailSuccess;
