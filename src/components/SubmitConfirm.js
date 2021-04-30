import { CSSTransition } from 'react-transition-group';
import '../styles/SubmitConfirm.css'

function SubmitConfirm({ in: inProp }) {
    return (
        <CSSTransition
        unmountOnExit
        in={true}
        timeout={{ appear: 0, enter: 0, exit: 300}}
        classNames='roll'
        appear>
        <div className='submit-confirm'>
            <h2>Thanks for the feedback!</h2>
        </div>
        </CSSTransition>
    )
}

export default SubmitConfirm
