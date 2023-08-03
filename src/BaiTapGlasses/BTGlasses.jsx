import React, { useState } from 'react'
import glassesList from './dataGlasses.json'
const BTGlasses = () => {
    // State Img
    const [imgSrc, setImgSrc] = useState('./image/v1.png')
    const handleImgSrc = (url) => {
        setImgSrc(url)
    }
    // State Name
    const [nameImg, setNameImg] = useState('')
    const handleName = (name) => {
        setNameImg(name)
    }
    // State Decs
    const [nameDecs, setDecs] = useState('')
    const handleDecs = (decs) => {
        setDecs(decs)
    }
    return (
        <div className='container'>
            <div>
                <div className="p-5 bg-dark text-white fs-5 text-center"
                    style={{
                        position: 'absolute',
                        top: '0px',
                        width: '100%',
                        opacity: '80%',
                    }}
                ><h1>TRY GLASSES APP ONLINE</h1></div>
                <img src="./image/background.jpg" class="img-fluid" alt="" width={'100%'} />
            </div>
            <div className='row'
                style={{
                    position: 'absolute',
                    top: '150px',
                    width: '100%',
                    zIndex: '1',
                }}
            >
                <div className='col-6'>
                    <div className="card img-fluid">
                        <img className='img-fluid' src="./image/model.jpg" alt="..."
                            style={{
                                position: 'relative',
                                width: '40%',
                                left: '205px',
                            }}
                        />
                        <div className="card-img-overlay">
                            <h5 className="card-title"
                                style={{
                                    position: 'relative',
                                    top: '230px',
                                    left: '-80px'
                                }}
                            >{nameImg}</h5>
                            <p className="card-text"
                                style={{
                                    position: 'relative',
                                    top: '250px',
                                    left: '-10px'
                                }}
                            >{nameDecs}</p>
                        </div>
                    </div>
                    <img className='img-fluid' src={imgSrc} alt="..."
                        style={{
                            width: '23%',
                            position: 'relative',
                            top: '-270px',
                            left: '-7px',
                            zIndex: '100',
                            opacity: '80%',
                        }}
                    />
                </div>
                <div className='col-6'>
                    <img className='img-fluid' src="./image/model.jpg" alt="..."
                        style={{
                            width: '40%',
                            position: 'relative',
                            top: '0px',
                            left: '-40px',
                            opacity: '80%',
                        }}
                    />
                    <img className='img-fluid' src={imgSrc} alt="..."
                        style={{
                            width: '23%',
                            position: 'relative',
                            top: '-70px',
                            left: '-260px',
                            opacity: '80%',
                        }}
                    />
                </div>
            </div>
            <div className='row pb-5'
                style={{
                    width: '100%',
                    position: 'relative',
                    top: '-400px',
                    zIndex: '100',
                }}
            >
                {glassesList.map((glasses) => (
                    <div className="col-2 mt-2" key={glasses.id}>
                        <img
                            className="img-fluid"
                            src={glasses.url}
                            alt="..."
                            style={{
                                height: 90,
                            }}
                            onClick={(event) => {
                                let url = glasses.url
                                let name = glasses.name
                                let decs = glasses.desc
                                handleImgSrc(url)
                                handleName(name)
                                handleDecs(decs)
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>)
}
export default BTGlasses
