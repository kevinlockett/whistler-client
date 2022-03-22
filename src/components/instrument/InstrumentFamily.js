import { Link } from 'react-router-dom'
import "./Instrument.css"

function InstrumentFamily() {

    return (
        <>
            <section className="instrument-family instrument-family__items bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Now let's talk about instruments</h2>
                    <p className="h2">Which instrument family interests you most?</p>
                    <div className="split">
                        <div className="instrument-family__item bg-yellow">
                            <h3 className='box-title'>Brass Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img' src={require('../assets/brass-family.png')} alt='colorful piano' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-teal">
                            <h3 className='box-title'>Guitar Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img' src={require('../assets/guitar-family.png')} alt='colorful banjo' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-orange">
                            <h3 className='box-title'>Keyboard Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img' src={require('../assets/keyboard-family.png')} alt='colorful collection of brass instruments and a keyboard' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                    </div>
                    <div className="split">
                        <div className="instrument-family__item bg-green">
                            <h3 className='box-title'>Percussion Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img'src={require('../assets/percussion-family.png')} alt='colorful electric guitar' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-red">
                            <h3 className='box-title'>Bowed Strings Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img' src={require('../assets/string-family.png')} alt='colorful collection of brass instruments and a keyboard' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-blue">
                            <h3 className='box-title'>Woodwind Family</h3>
                            <Link className='btn--music-style' to="/">
                                <img className='btn--music-style__img'src={require('../assets/woodwind-family.png')} alt='colorful electric guitar' />
                            </Link>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstrumentFamily