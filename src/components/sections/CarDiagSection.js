import React, {Component} from 'react'

export default class CarDiagSection extends Component{
    render(){
        return(
            <section className='uk-section'>
                <div className="uk-container uk-container-small">
                <article className="uk-article">

                    <h3 className='uk-text-uppercase'>Car Diagnostics</h3>

                    <p className="uk-article-meta">Written on 21st December 2017. (Last Updated on 10th January 2018)</p>

                    <p className="uk-text-lead">General Overview on OBD II Tool</p>

                    <p><span className=''>On-board diagnostics (OBD)</span> is an automotive term referring to a vehicle's self-diagnostic and reporting capability. OBD systems give the vehicle owner or repair technician access to the status of the various vehicle subsystems. The amount of diagnostic information available via OBD has varied widely since its introduction in the early 1980s versions of on-board vehicle computers. Early versions of OBD would simply illuminate a malfunction indicator light or "idiot light" if a problem was detected but would not provide any information as to the nature of the problem. Modern OBD implementations use a standardized digital communications port to provide real-time data in addition to a standardized series of diagnostic trouble codes, or DTCs, which allow one to rapidly identify and remedy malfunctions within the vehicle. (Source: Wikipedia)</p>

                    <p>As it is very expensive to obtain an OBD tool in Ghana, it is not suprising. OBD Tools are usually heavyweight, and heightens the shipping bills raising the amount one has to pay to obtain it</p>

                    <p className="uk-text-lead">The Mini Bluetooth OBD Tool</p>
                    <p>Lightweight, like you can never imagine, as compared to the traditional tools. It comes with more features than the traditional scan tools, since it interfaces with upgradable phone app (Traditional Tools have fixed interfaces)</p>

                    <p className="uk-text-lead">Instructions for Android Users</p>

                    <div className='profile-opened'>
                    <p>1. Check the link below for the Android App - TorquePro App. Install the app</p>
                    <p>2. Go to your Bluetooth Settings and scan for a device with the name 'OBD II'</p>
                    <img src='http://www.elm327.com/upload/201709/1505969973734297.png'/>
                    <p>3. Use '1234' as Bluetooth password when asked</p>
                    <p>4. Bluetooth Device should be successfully paired by now. Compare with the image below</p>
                    <img src='http://www.elm327.com/upload/201709/1505970054982709.png'/>
                    <p>5. Run 'TorquePro' app you downloaded. If not, check Instruction 1 to download. You should open to a screen as shown below. Click 'Settings' as highlighted </p>
                    <img src='http://www.elm327.com/upload/201709/1505970338596034.png'/>
                    <p>6. Click 'OBD2 Adapter Settings'</p>
                    <p>7. Choose Connection type 'Bluetooth'</p>
                    <img src='http://www.elm327.com/upload/201709/1505970473904398.png'/>
                    <p>8. Choose Bluetooth Device 'OBDII'</p>
                    <p>9. Exit 'TorquePro' app and start again. Your Device should be connected now</p>
                    <p>10. Use the 'CHECK FAULT' button at the home screen to check for faults in your car</p>

                    <p>In case any of the Steps didnt produce expected result, you can contact me for more clarification</p>


                        <div className="uk-padding-small">
                            <a href='http://www.elm327.com/upload/soft/Torque_Pro%20v1.8.54.apk' className="uk-button uk-button-primary">Download Android App</a>
                        </div>
                    </div>

                    <p className="uk-text-lead">Instructions for IOS Users</p>
                    <div className='profile-opened'>
                        <p>Further Detailed Instructions to be written for IOS soon</p>
                    </div>

                <p className="uk-text-lead">What to do after codes are detected</p>
                    <div className='profile-opened'>
                        <p>Further Detailed Instructions to be written soon</p>
                    </div>



                </article>
                </div>
            </section>
        )
    }
}