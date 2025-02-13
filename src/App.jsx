import './App.css'

export function App(){
    return(
        <article className=''>  
            <header className=''>

                <nav className='m-nav-info'></nav>
                <h1 className='m-h1-style'>¿Quienes Somos?</h1>
                <p className='m-p1-style'>Somos una empresa dedicada a la comercializacion de calzados laborales. La imagen de su empresa se refleja en la presencia de su personal. El punto de encuentro entre su necesidad y nuestro servicio.</p>
                <div className='m-dv-syle'>
                    <strong>Testeo 1</strong>
                    <span>informacion complementaria</span>
                </div>
            
            </header>

            <aside>
                <button className='m-buttons-syle'>
                    Solicitar
                </button>
            </aside>
        </article>
    )

}