import React, { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import standart from '../../img/cars/standart.png';
import premium from '../../img/cars/premium.png';
import bisiness from '../../img/cars/bisiness.png';
import { Paper, TextField, Button, MenuItem, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { drawRoute } from '../../components/DrawRoute/DrawRoute';
import { getAddress } from '../../store/actions/address';
import { getRoute } from '../../store/actions/route';
import { getCard } from '../../store/actions/card';
import { GoToProfile } from '../../components/OrderForm/OrderForm';

const Map = ({ 
    cardData, 
    addresses, getAddress, 
    getRoute, route 
}) => {
    
    useEffect(() => {
        getAddress();
    }, [])

    const [cardProfile, setCardData] = useState({})  
    const [orderForm, setOrderForm] = useState(true)  
    const [activeOrder, setActiveOrder] = useState(false) 
    const [addressForm, setAddressForm] = useState(false)    
    const [address, setAddress] = useState([])
    const [addressTo, setAddressTo] = useState('')
    const [addressFrom, setAddressFrom] = useState('')    

    const cardDataCheck = (cardData) => {
        for (let field in cardData) {
            if (!cardData[field]) {
                return false
            }
            return true
        }
    }

    useEffect(() => {
        if (cardData) {
            setCardData(cardData)
            if (cardDataCheck(cardData)){
                setAddressForm(true)
            }
        }  
        if (addresses) {
            setAddress(addresses)
        } 
    }, [cardData])

    const paymentCheck = function(cardData) {
        for (let field in cardData) {
            if(!cardData[field]) {
                return false
            }
            return true
        }
    }

    useEffect(() => {
        if (cardData) {
            setCardData(cardData)
            if (paymentCheck(cardData)){
                setOrderForm(false)
            }
        }        
    }, [cardData]) 

    mapboxgl.accessToken =
    "pk.eyJ1IjoiaW5uYW11YyIsImEiOiJja285MGR6NHUwZGJ2MnNxbXZiYjd1cGRvIn0.FWzh15MRI-uHyPeNOCuVnQ";  

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.3056504, 59.9429126], 
            zoom: 12,
        });
    });

    const handleChangeAddressFrom = (event) => {
        setAddressFrom(event.target.value)
        if (addressTo) {
            const addresses = {
                address1: event.target.value,
                address2: addressTo,
            }
            getRoute(addresses)
        }
    }

    const handleChangeAddressTo = (event) => {
        setAddressTo(event.target.value)
        if (addressFrom) {
            const addresses = {
                address1: addressFrom,
                address2: event.target.value
            }
            getRoute(addresses)
        }
    }

    const handleCallTaxi = () => {        
        const addresses = {
            address1: addressFrom,
            address2: addressTo
        }
        drawRoute(map, route)
        setActiveOrder(true)
    }

    const deleteOrder = () => {
        setActiveOrder(false)
        map.current.removeLayer('route').removeSource('route');
    } 

    const mapContainer = useRef(null);
    const map = useRef(null);

        return ( 
            <div className="map-wrapper">
                <div id="map" data-testid="map" className="map" ref={mapContainer}>
                    {
                        orderForm ? 
                        <GoToProfile />
                        :
                        addressForm ? 
                        <Paper className="address__container">  
                        {
                            activeOrder ? 
                            <Grid
                            container
                            spacing={0}
                            direction="column"
                            justify="center"
                            > 
                                 <div className='oder-form-submit__conatiner'>
                                    <span className='oder-form-submit__title'>Заказ размещен</span>
                                    <span className='oder-form-submit__text'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</span>
                                    <Button 
                                    className='btn-oder-form-start'
                                    onClick={ deleteOrder }>Сделать новый заказ
                                    </Button>
                                </div>
          
                            </Grid> 
                                :
                                <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                                >
                                    <TextField
                                    id=""
                                    select
                                    label="Откуда"
                                    value={ addressFrom }
                                    onChange={ handleChangeAddressFrom }
                                    className="address__select"
                                    >
                                        {
                                            address.map(
                                                (option) => {
                                                    if (option !== addressTo) {
                                                        return (
                                                            <MenuItem value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    }
                                                }
                                            )
                                        }                                      
                                    </TextField>
                                    <TextField
                                    className="address__select"   
                                    id=""
                                    select
                                    label="Куда"
                                    value={addressTo}
                                    onChange={handleChangeAddressTo}                                                                         
                                    >
                                        {
                                            address.map(
                                                (option) => {
                                                    if (option !== addressFrom) {
                                                        return (
                                                            <MenuItem value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    </TextField>
                                    <div className="order__tariff">
                                        <ul className="order__tariff-list">
                                            <li className="order__tariff-item">
                                                <div className="order__tariff-text">
                                                    <div className="order__tariff-name">Стандарт</div>
                                                    <div className="order__tariff-price-text">Стоимость</div>
                                                    <div className="order__tariff-price">150 ₽</div>
                                                </div>
                                                <div className="order__tariff-car">
                                                    <img src={standart} alt="Стандарт" className="order__tariff-img" />
                                                </div>
                                            </li>
                                            <li className="order__tariff-item">
                                                <div className="order__tariff-text">
                                                    <div className="order__tariff-name">Премиум</div>
                                                    <div className="order__tariff-price-text">Стоимость</div>
                                                    <div className="order__tariff-price">250 ₽</div>
                                                </div>
                                                <div className="order__tariff-car">
                                                    <img src={premium} alt="Стандарт" className="order__tariff-img" />
                                                </div>
                                            </li>
                                            <li className="order__tariff-item">
                                                <div className="order__tariff-text">
                                                    <div className="order__tariff-name">Бизнес</div>
                                                    <div className="order__tariff-price-text">Стоимость</div>
                                                    <div className="order__tariff-price">300 ₽</div>
                                                </div>
                                                <div className="order__tariff-car">
                                                    <img src={bisiness} alt="Стандарт" className="order__tariff-img" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>  
                    
                                    <Button className='btn-oder-form-start' onClick={ handleCallTaxi }>Вызвать такси</Button>
                                </Grid>                                
                        }                                                
                        </Paper>
                        :
                        null                
                    }
                </div>
            </div>
        );    
}

const mapStateToProps = ({ card, address,  route }) => ({       
    cardData: card.data, 
    isLoading: address.isLoading, 
    addresses: address.data.addresses, 
    route: route.data 
});

const mapDispatchToProps = { getAddress, getCard, getRoute }

export const MapWithAuth = connect(
    mapStateToProps,
    mapDispatchToProps)
(Map);

