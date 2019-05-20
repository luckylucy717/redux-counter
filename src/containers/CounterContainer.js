import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

/* 13가지 색상 중 랜덤으로 선택하는 함수이다. */

export function getRandomColor() {
    const colors = [
        '#495057',
        '#ffe4b5',
        '#7b68ee',
        '#ffc0cb',
        '#ff4500',
        '#2f4f4f',
        '#1e90ff',
        '#4682b4',
        '#32cd32',
        '#daa520'
    ]

    const random = Math.floor(Math.random() * 10);
    return colors[random];
}

const mapStateToProps = (state) =>({
    color: state.colorData.color, 
    number: state.numberData.number,
})

const mapDispatchToProps = (dispatch)  =>({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () =>{
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }  
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;