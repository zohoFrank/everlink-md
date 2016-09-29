/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';

import marked from '../../lib/markedSetting';

@connect((store) => {
	return {
		textContent: store.textContent
	}
})
export default class PreviewWindow extends React.Component {

    render() {
    	const htmlContent = marked(this.props.textContent || '# EverlinkMD');
        return (
        	<div id="md-preview">
				<div dangerouslySetInnerHTML={{__html: htmlContent}} />
			</div>
		)
    }
}
