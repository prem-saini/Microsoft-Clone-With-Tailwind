import React from "react"
import Search from "../../src/assets/search.png"
import Cart from "../../src/assets/cart.png"
import User from "../../src/assets/user.png"
import Log from "../../src/assets/1stslide.avif"
import Arrow from "../../src/assets/arrowup.png"

function Navbar() {
    return (
        <>
            <div className="container mx-auto">

                <div className="navbar flex justify-between items-center py-4">
                    <div className="flex justify-center items-center md:order-2">
                        <div className="hambegur inline-block p-4 cursor-pointer md:hidden">
                            <div className="line h-0.5 w-6 my-1 bg-black "></div>
                            <div className="line h-0.5 w-6 my-1 bg-black "></div>
                            <div className="line h-0.5 w-6 my-1 bg-black "></div>

                        </div>
                        <div className="search md:hidden w-4 mr-6"><img src={Search} alt=" " /></div>
                    </div>
                    <div className="logo text-center flex md:order-1">
                        <div className=" w-[70%] flex justify-start"><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="logo" /> </div>
                        <div className="feature absolute md:items-center w-fit md:static md:w-auto md:w-fit bg-grey-200 md:bg-white inset-0 md:flex md:mx-4 md:space-x-6 -translate-x-96 md:-translate-x-0">
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">MicroSoft 365</div>
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Office</div>
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Windows</div>
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Surface</div>
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Xbox</div>
                            <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Support</div>
                        </div>
                    </div>
                    <div className="cart md:order-3 text-center flex">
                        <div className="search md:block hidden mr-6"> All MicroSoft </div>
                        <div className="mx-2 hidden">Search</div>
                        <img className=" w-4  mr-4 hidden " src={Search} alt=" " />
                        <div className="flex pt-1">
                            <img className="w-4 h-4 mr-4" src={Cart} alt="" />
                            <img className="w-4 h-4 mr-4 " src={User} alt="" />
                        </div>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="silder flex flex-col-reverse md:flex-row bg-[#f2f2f2]">
                    <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-32 space-y-5 ">
                        <h1 className="text-2xl font-medium md:text-4xl mx-5">Surface Laptop 4</h1>
                        <p className="w-3/4 mx-5 text-center md:text-left">Do it all with a microsoft value are very easy in your computer is very hard</p>
                        <button className="bg-black text-white px-4 py-2 my-6 font-bold mx-5">Shop Now </button>

                    </div>
                    <div className="right ">
                        <img className=" w-[60rem] md:w-[64rem]" src={Log} alt="" />
                    </div>

                </div>

                <div className="promo space-y-6 flex flex-col lg:flex-row justify-center">
                    <div className="item flex items-center justify-start mx-4 mt-6 space-x-2 mt-6 md:flex-col">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" alt="" />
                        <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Choose Your Microsoft 365</span>
                    </div>
                    <div className=" item flex items-center justify-start mx-2 space-x-2  md:flex-col">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40" alt="" />
                        <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Explore Surface devices</span>
                    </div>

                    <div className=" item flex items-center justify-start mx-2 space-x-2  md:flex-col ">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Xbox-Logo-80x80?wid=40&hei=40" alt="" />
                        <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Buy Xbox games</span>
                    </div>
                    <div className=" item flex items-center justify-start mx-2 space-x-2  md:flex-col">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40" alt="" />
                        <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Get Windows 11</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-24">
                    <div className="card w-[100%] md:mx-2 ">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-Platinum-Alcantara-FY23HOL?wid=380&hei=213&fit=crop" alt="" />
                        <span className="my-5">
                            <h1 className="text-2xl my-4">Surface Laptop 5</h1>
                            <p className="">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                        </span>
                        <button className="text-red-800 my-2">Learn More  </button>
                    </div>




                    <div className=" card w-[100%] md:mx-2">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-FY23HOL?wid=380&hei=213&fit=crop" alt="" />
                        <span className="my-5">
                            <h1 className="font-medinm text-2xl md:text-1xl  my-4">Microsoft 365</h1>
                            <p className="my-5">Apps and features to help you turn ideas into reality, stay safer and focus on the important things in life.</p>
                        </span>
                        <button className="text-red-800 my-2">for one person </button><br />
                        <button className="text-red-800">for up to six person </button>
                    </div>
                    <div className="card w-[100%] md:mx-2">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-PC-SMB-OneNote?wid=380&hei=213&fit=crop" alt="" />
                        <span className="my-5">
                            <h1 className=" font-medinm text-2xl md:text-1xl  my-4">One Note</h1>
                            <p className="">Orgnize your notes and your life</p>
                        </span>
                        <button className="text-red-800 my-2">Learn More </button>
                    </div>
                    <div className="card w-[100%] md:mx-2">
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=380&hei=213&fit=crop" alt="" />
                        <span className="">
                            <h1 className="font-medinm text-2xl md:text-1xl  my-4">Designed for lift today and tomorrow</h1>
                            <p className="w-[100%]">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                        </span>
                        <button className="text-red-800 my-2">See if your PC is ready </button>
                    </div>

                </div>



                <div className="">

                    <div class="flex justify-center  bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-MSFT-hero-Edge:VP5-1596x600')]">
                        <div className="cort w-96 h-60  my-24 bg-white md:bg-white " >
                            <h1 className="text-3xl my-4">MicroSoft Edge</h1>
                            <p>Microsoft Edge security and privacy features such as Microsoft Defender SmartScreen, Password Monitor, InPrivate search, and Kids Mode help keep you and your loved ones protected and secure online</p>
                            <button className="bg-black text-white p-3 w-18 my-1" >Download Now</button>
                        </div>

                    </div>
                </div>
                <div>


                    <h1 className="flex justify-start text-3xl my-3">For Business</h1>

                    <div className="flex flex-col mt-5 md:flex-row my-5 ">

                        <div className="card w-[100%] ">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Family-2022-M2-1?wid=380&hei=213&fit=crop" alt="" />
                            <span className="my-5">
                                <h1 className="font-bold text-2xl my-2">Surface for Business Famliy</h1>
                                <p className="my-2">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                            </span>
                            <button className="text-red-800">Learn More </button>
                        </div>
                        <div className="card w-[100%] ">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=380&hei=213&fit=crop" alt="" />
                            <span className="my-5">
                                <h1 className="font-bold text-2xl my-2">Window 11 for business</h1>
                                <p className="my-2">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                            </span>
                            <button className="text-red-800 ">Shop Now </button>
                        </div>
                        <div className="card w-[100%] ">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-M365-CP-Microsoft365-Commercial?wid=380&hei=213&fit=crop" alt="" />
                            <span className="my-5">
                                <h1 className="font-bold text-2xl my-2">Microsoft 365 for Business</h1>
                                <p className="my-2">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                            </span>
                            <button className="text-red-800">Learn More </button>
                        </div>
                        <div className="card w-[100%] ">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop" alt="" />
                            <span className="my-5">
                                <h1 className="font-bold text-2xl my-2">Get microSoft teams for free</h1>
                                <p className="my-2">Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift</p>
                            </span>
                            <button className="text-red-800">Sign up for free </button>
                        </div>
                    </div>


                </div>
                <div className="second-last flex justify-start items-center ">
                    <span className="text-center">Follow Microsoft</span>
                    <div className="flex mx-5 mt-5">
                        <img className=" w-12 h-12 mx-2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="" />
                        <img className=" w-12 h-12 mx-2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter%202x?scl=1" alt="" />
                        <img className=" w-12 h-12 mx-2" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1" alt="" />
                    </div>
                </div>
                <div className="btnn flex justify-end ">
                    <button className="bg-gray-400 text-white px-2 py-4 px-4 mr-2 font-bold flex">
                        <img className="h-6" src={Arrow} alt="" />
                        Back To Top</button>
                </div>

                <div>
                    <div className="footer  md:flex justify-between bg-[#f2f2f2] my-5">
                        <div className="flex  flex-col text-start   my-10">
                            <span className="font-medium">What's New</span>
                            <ul>
                                <li className="my-5">Microsoft 365</li>
                                <li className="my-5">Surface Pro X</li>
                                <li className="my-5">Surface Pro 5</li>
                                <li className="my-5">Surface Surface 3</li>
                                <li className="my-5">Windows 11 apps</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  text-start my-10">
                            <span className="font-medium">Microsoft store</span>
                            <ul>
                                <li className="my-5">Account profile</li>
                                <li className="my-5">Download Center</li>
                                <li className="my-5">Microsoft Store Support</li>
                                <li className="my-5">Returns</li>
                                <li className="my-5">Order tracking</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  text-start  my-10">
                            <span className="font-medium">Eduation</span>
                            <ul>
                                <li className="my-5">Microsoft in education</li>
                                <li className="my-5">Devices for education</li>
                                <li className="my-5">Microsoft Teams for Education</li>
                                <li className="my-5">Microsoft 365 Education</li>
                                <li className="my-5">Office Education</li>
                                <li className="my-5">
                                    Educator training and development</li>
                                <li className="my-5">Deals for students and parents</li>
                                <li className="my-5">Azure for students</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  text-start my-10">
                            <span className="font-medium">Business</span>
                            <ul>
                                <li className="my-5">Microsoft Cloud</li>
                                <li className="my-5">
                                    Microsoft Security</li>
                                <li className="my-5">Azure</li>
                                <li className="my-5">Dynamics 365</li>
                                <li className="my-5">Microsoft 365</li>
                                <li className="my-5">Microsoft Advertising</li>
                                <li className="my-5">Microsoft Industry</li>
                                <li className="my-5">Microsoft Teams</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  text-start my-10">
                            <span className="font-medium">Develpoer & IT</span>
                            <ul>
                                <li className="my-5"> Developer Center</li>
                                <li className="my-5">Documentation</li>
                                <li className="my-5">Microsoft Learn</li>
                                <li className="my-5">Microsoft Tech Community</li>
                                <li className="my-5">Azure Marketplace</li>
                                <li className="my-5"> AppSource</li>
                                <li className="my-5">Microsoft Power Platform</li>
                                <li className="my-5">Visual Studio</li>
                            </ul>
                        </div>
                        <div className="flex flex-col  text-start my-10">
                            <span className="font-medium" >Company</span>
                            <ul className="">
                                <li className="my-5 text-1xl">Careers</li>
                                <li className="my-5">About Microsoft</li>
                                <li className="my-5">Company news</li>
                                <li className="my-5">Privacy at Microsoft</li>
                                <li className="my-5">Investors</li>
                                <li className="my-5">Security</li>
                                <li className="my-5">Sustainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_Navbar flex justify-between  bg-[#f2f2f2] mt-[-2.5rem] ">
                        <span className="mx-1 md:mx-5 flex"><img className="w-8 mx-18 text-center" src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="" /> <a href="/">English India</a></span>
                        <ul className="flex space-x-1 mx-6 md:space-x-8">
                            <li>Contact Microsoft</li>
                            <li>Privacy</li>
                            <li> Terms of use</li>
                            <li>Trademarks</li>
                            {/* <li> About</li>
                            <li>our ads © </li>
                            <li>Microsoft 2022</li> */}
                        </ul>
                    </div>
                </div>

            </div>




        </>
    )
}
export default Navbar