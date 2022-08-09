import React, { Component } from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class ParallaxPics extends Component {
    constructor() {
        super()
        this.state = {
            left: '',
            top: ''
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', (event) => {
            this.setState({left: event.pageX, top: event.pageY});
        });
    }

    render() {

        const parallaxMouseMove = (speed, axis) => {
            if (axis === 'x') {
                const x = (window.innerHeight - this.state.left*speed)/100
                return `translateX(${x}px)`
            }
            else if (axis === 'y') {
                const y = (window.innerHeight - this.state.top*speed)/100
                return `translateY(${y}px)`
            }

        }

        return (
            <div>
                <img alt='Khunchang' style={{transform: parallaxMouseMove(1, 'y'), bottom: '-30px'}} src={images['Khunchang.png']} />
                <img alt="KumpaKanya" style={{transform: parallaxMouseMove(-2, 'y')}} src={images['KumpaKanya.png']} />
                <img alt="Eden" style={{transform: parallaxMouseMove(3, 'y')}} src={images['Eden.png']} />
                <img alt="Din" style={{transform: parallaxMouseMove(2, 'x')}} src={images['Din.png']} />
                <img alt="Eva" style={{transform: parallaxMouseMove(3, 'y')}} src={images['Eva.png']} />
                <img alt="Thanwa1" style={{transform: parallaxMouseMove(-3, 'y')}} src={images['Thanwa1.png']} />
                <img alt="Thanwa2" style={{transform: parallaxMouseMove(2, 'y')}} src={images['Thanwa2.png']} />
                <img alt="Moomanao" style={{transform: parallaxMouseMove(-2, 'x')}} src={images['Moomanao.png']} />
                <img alt="Us" style={{transform: parallaxMouseMove(1, 'x')}} src={images['Us.png']} />
                <img alt="Meena" style={{transform: parallaxMouseMove(-0.5, 'x')}} src={images['Meena.png']} />
                <img alt="Mituna" style={{transform: parallaxMouseMove(0.5, 'x'), left: '-10px'}} src={images['Mituna.png']} />
            </div>
        )
    }

}

export default ParallaxPics;
