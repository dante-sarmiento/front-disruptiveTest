import React, { useEffect, useState } from 'react'
import './table.css'

const Table = (data) => {
    const [ inversion, setInversion ] = useState(Number)
    //ESTADOS MENSUALES
    //mes uno
    const [ mesUnoBtc, setMesUnoBtc ] = useState(Number)
    const [ mesUnoEth, setMesUnoEth ] = useState(Number)

     //mes dos
    const [ mesDosBtc, setMesDosBtc ] = useState(Number)
    const [ mesDosEth, setMesDosEth ] = useState(Number)

    //mes tres
    const [ mesTresBtc, setMesTresBtc ] = useState(Number)
    const [ mesTresEth, setMesTresEth ] = useState(Number)

    //mes cuatro
    const [ mesCuatroBtc, setMesCuatroBtc ] = useState(Number)
    const [ mesCuatroEth, setMesCuatroEth ] = useState(Number)

    //mes cinco
    const [ mesCincoBtc, setMesCincoBtc ] = useState(Number)
    const [ mesCincoEth, setMesCincoEth ] = useState(Number)

    //mes seis
    const [ mesSeisBtc, setMesSeisBtc ] = useState(Number)
    const [ mesSeisEth, setMesSeisEth ] = useState(Number)

     //mes siete
    const [ mesSieteBtc, setMesSieteBtc ] = useState(Number)
    const [ mesSieteEth, setMesSieteEth ] = useState(Number)

    //mes ocho
    const [ mesOchoBtc, setMesOchoBtc ] = useState(Number)
    const [ mesOchoEth, setMesOchoEth ] = useState(Number)

    //mes nueve
    const [ mesNueveBtc, setMesNueveBtc ] = useState(Number)
    const [ mesNueveEth, setMesNueveEth ] = useState(Number)

    //mes diez
    const [ mesDiezBtc, setMesDiezBtc ] = useState(Number)
    const [ mesDiezEth, setMesDiezEth ] = useState(Number)

    //mes once
    const [ mesOnceBtc, setMesOnceBtc ] = useState(Number)
    const [ mesOnceEth, setMesOnceEth ] = useState(Number)

    //mes doce
    const [ mesDoceBtc, setMesDoceBtc ] = useState(Number)
    const [ mesDoceEth, setMesDoceEth ] = useState(Number)

    // CALCULOS DE PROYECCION MENSUAL//
    //mes uno
    const mes1 = () => {
        const btc1 = inversion * ( 0.5 * 30 / 365 )
        const eth1 = inversion * ( 0.3 * 30 / 365 )
        setMesUnoBtc(btc1);
        setMesUnoEth(eth1);
    }

    //mes dos
    const mes2 = () => {
        const btc2 = inversion * ( 0.5 * 60 / 365 )
        const eth2 = inversion * ( 0.3 * 60 / 365 )
        setMesDosBtc(btc2);
        setMesDosEth(eth2);
    }

    //mes tres
    const mes3 = () => {
        const btc3 = inversion * ( 0.5 * 90 / 365 )
        const eth3 = inversion * ( 0.3 * 90 / 365 )
        setMesTresBtc(btc3);
        setMesTresEth(eth3);
    }

     //mes cuatro
    const mes4 = () => {
        const btc4 = inversion * ( 0.5 * 120 / 365 )
        const eth4 = inversion * ( 0.3 * 120 / 365 )
        setMesCuatroBtc(btc4);
        setMesCuatroEth(eth4);
    }

    //mes cinco
    const mes5 = () => {
        const btc5 = inversion * ( 0.5 * 150 / 365 )
        const eth5 = inversion * ( 0.3 * 150 / 365 )
        setMesCincoBtc(btc5);
        setMesCincoEth(eth5);
    }

    //mes seis
    const mes6 = () => {
        const btc6 = inversion * ( 0.5 * 180 / 365 )
        const eth6 = inversion * ( 0.3 * 180 / 365 )
        setMesSeisBtc(btc6);
        setMesSeisEth(eth6);
    }

    //mes siete
    const mes7 = () => {
        const btc7 = inversion * ( 0.5 * 210 / 365 )
        const eth7 = inversion * ( 0.3 * 210 / 365 )
        setMesSieteBtc(btc7);
        setMesSieteEth(eth7);
    }

    //mes ocho
    const mes8 = () => {
        const btc8 = inversion * ( 0.5 * 240 / 365 )
        const eth8 = inversion * ( 0.3 * 240 / 365 )
        setMesOchoBtc(btc8);
        setMesOchoEth(eth8);
    }

    //mes nueve
    const mes9 = () => {
        const btc9 = inversion * ( 0.5 * 270 / 365 )
        const eth9 = inversion * ( 0.3 * 270 / 365 )
        setMesNueveBtc(btc9);
        setMesNueveEth(eth9);
    }

     //mes diez
    const mes10 = () => {
        const btc10 = inversion * ( 0.5 * 300 / 365 )
        const eth10 = inversion * ( 0.3 * 300 / 365 )
        setMesDiezBtc(btc10);
        setMesDiezEth(eth10);
    }

    //mes once
    const mes11 = () => {
        const btc511 = inversion * ( 0.5 * 330 / 365 )
        const eth511 = inversion * ( 0.3 * 330 / 365 )
        setMesOnceBtc(btc511);
        setMesOnceEth(eth511);
    }

    //mes doce
    const mes12 = () => {
        const btc12 = inversion * ( 0.5 * 360 / 365 )
        const eth12 = inversion * ( 0.3 * 360 / 365 )
        setMesDoceBtc(btc12);
        setMesDoceEth(eth12);
    }

    useEffect(() => {
        mes1();
        mes2();
        mes3();
        mes4();
        mes5();
        mes6();
        mes7();
        mes8();
        mes9();
        mes10();
        mes11();
        mes12();
    }, [inversion]);
    return (
        <div className='container' >
            <table className="table table-striped" data-testid="table-element">
                <thead>
                    <tr>
                        <th scope="col">Inversion en USD</th>
                        <th scope="col"><input type="number" className='input' onChange={e => setInversion(e.target.value)}/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BTC</td>
                        <td>ETH</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 1 = {mesUnoBtc}</td>
                        <td>Intereses mes 1 = {mesUnoEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 2 = {mesDosBtc}</td>
                        <td>Intereses mes 2 = {mesDosEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 3 = {mesTresBtc}</td>
                        <td>Intereses mes 3 = {mesTresEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 4 = {mesCuatroBtc}</td>
                        <td>Intereses mes 4 = {mesCuatroEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 5 = {mesCincoBtc}</td>
                        <td>Intereses mes 5 = {mesCincoEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 6 = {mesSeisBtc}</td>
                        <td>Intereses mes 6 = {mesSeisEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 7 = {mesSieteBtc}</td>
                        <td>Intereses mes 7 = {mesSieteEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 8 = {mesOchoBtc}</td>
                        <td>Intereses mes 8 = {mesOchoEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 9 = {mesNueveBtc}</td>
                        <td>Intereses mes 9 = {mesNueveEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 10 = {mesDiezBtc}</td>
                        <td>Intereses mes 10 = {mesDiezEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 11 = {mesOnceBtc}</td>
                        <td>Intereses mes 11 = {mesOnceEth}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Intereses mes 12 = {mesDoceBtc}</td>
                        <td>Intereses mes 12 = {mesDoceEth}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
