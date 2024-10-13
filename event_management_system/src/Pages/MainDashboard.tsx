import Card from "../components/Card";
import camiraLength from "../components/icons/camira-length.svg";
import cards from "../components/icons/cards.svg";
import heartRates from "../components/icons/heart-rates.svg";
import dashes from "../components/icons/dashes.svg";
import action1 from '../components/icons/action-icon-1.svg';
import action2 from '../components/icons/action-icon-2.svg';
import inOutIcon from '../components/icons/in-out-icon.svg';
import dashFram from '../assets/Frame-176.png';
import { Link } from "react-router-dom";


const MainDashboard = () => {
    return (
        <>
             {/*Header and Paragraph */}
             <div className="mb-6 text-white">
              <h1 className="text-2xl font-bold">Good morning, Bano!</h1>
              <p className="text-gray-600 text-[#FFFFFFCC]">
                Take a look at your events and results
              </p>
            </div>

            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card
                title="No. Of RSVPs"
                content="73"
                icon={<img src={camiraLength} alt="RSVPs" />}
              />
              <Card
                title="Total IV's Sent"
                content="500"
                icon={<img src={cards} alt="Total IVs" />}
              />
              <Card
                title="RSVP Rate"
                content="50%"
                icon={<img src={heartRates} alt="RSVP Rate" />}
              />
              <Card
                title="Capacity Filled"
                content="56%"
                icon={<img src={dashes} alt="Capacity" />}
              />
            </div>

            {/* Second Section: Additional Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2 text-white border  border-[#62379B] rounded-[20px] p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className=" col-span-3">
                    <div className="grid grid-cols-3">
                      <Link to={"/dashboard/event"} className="  flex justify-center items-center size-[120px] bg-[#007AFF33] hover:bg-[#007bff4c] text-[#007AFF] rounded-[15px] ">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.375 5.62402H5.625V9.37402H4.375V5.62402H0.625V4.37402H4.375V0.624023H5.625V4.37402H9.375V5.62402Z"
                                fill="#007AFF"
                              />
                            </svg>
                          </div>
                          <p>Add New</p>
                        </div>
                       </Link>
                      <div className="flex bg-[#25252580] h-[120px] rounded-2xl p-6 col-span-2">
                        <div className="grid gap-4">
                          <div>
                            <p className="text-[24px] ">
                              11:00<span className="text-[12px]"> AM</span>
                            </p>
                          </div>
                          <p>Meeting with the stakeholders</p>
                        </div>
                        <div className="flex justify-center items-center size-[60px] bg-[#474747] rounded-full">
                          <svg
                            width="26"
                            height="17"
                            viewBox="0 0 26 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.5 3.8125C0.5 2.9837 0.82924 2.18884 1.41529 1.60279C2.00134 1.01674 2.7962 0.6875 3.625 0.6875H15.3438C16.1017 0.687411 16.8339 0.962801 17.4039 1.46239C17.9739 1.96197 18.3429 2.6517 18.4422 3.40312L23.3016 1.24375C23.5394 1.13777 23.8 1.09291 24.0596 1.11326C24.3192 1.13361 24.5696 1.21851 24.788 1.36025C25.0065 1.502 25.186 1.69609 25.3104 1.92488C25.4347 2.15367 25.4999 2.40991 25.5 2.67031V14.3297C25.4998 14.5899 25.4346 14.8459 25.3103 15.0745C25.1861 15.3031 25.0067 15.4971 24.7885 15.6388C24.5702 15.7805 24.3201 15.8654 24.0607 15.886C23.8013 15.9065 23.5409 15.8619 23.3031 15.7563L18.4422 13.5969C18.3429 14.3483 17.9739 15.038 17.4039 15.5376C16.8339 16.0372 16.1017 16.3126 15.3438 16.3125H3.625C2.7962 16.3125 2.00134 15.9833 1.41529 15.3972C0.82924 14.8112 0.5 14.0163 0.5 13.1875V3.8125Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

<img src={dashFram} alt=""  className="h-6 my-4 w-full"/>

                    <div className="grid grid-cols-3">

                      <Link to={"/dashboard/event"} className="  flex justify-center items-center size-[120px] bg-[#FF3D0033] hover:bg-[#ff3c0045] text-[#FF3D00] rounded-[15px] ">
                        <div className="flex flex-col items-center space-y-4">
                          <div>
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.375 5.62402H5.625V9.37402H4.375V5.62402H0.625V4.37402H4.375V0.624023H5.625V4.37402H9.375V5.62402Z"
                                fill="#FF3D00"
                              />
                            </svg>
                          </div>
                          <p>Add New</p>
                        </div>
                      </Link>

                      <div className="flex justify-between h-[120px] bg-[#25252580] rounded-2xl col-span-2">
                        <div className="grid gap-6 p-6">
                          <p>Next Event</p>
                          <div>
                            <p className="text-[24px] ">
                              18 <span className="text-[12px]">Nov</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col  items-center size-[120px] bg-[#252525CC] rounded-[15px]">
                          <p className="flex-1 pt-4">Days left</p>
                          <div className="flex flex-col items-center justify-center w-full h-1/2 bg-[#393939] rounded-[15px]">
                            <div className="bg-[#707070] w-5 h-[2px] rounded-lg"></div>
                            <span>07</span>
                            <div className="bg-[#707070] w-5 h-[2px] rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-1 gap-4 py-5 flex flex-col justify-between items-center bg-[#25252580] rounded-[15px]">
                    <h1 className={`'mt-14 font-[400]'`}>NA</h1>
                    <div className="flex items-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.58965 3.60199C2.52325 3.58442 2.46151 3.55247 2.40882 3.50841C2.35613 3.46434 2.31376 3.40924 2.28472 3.34699C2.25569 3.28474 2.24068 3.21686 2.24078 3.14817C2.24087 3.07949 2.25607 3.01166 2.28528 2.94949L3.32278 0.740112C3.36056 0.659205 3.42068 0.590774 3.49604 0.542874C3.5714 0.494973 3.65888 0.469596 3.74817 0.469727C3.83747 0.469858 3.92487 0.495493 4.00009 0.543615C4.07531 0.591737 4.13523 0.660344 4.17278 0.741362L4.63028 1.72199L4.68028 1.70511C5.75965 1.41603 6.90414 1.4899 7.9374 1.91534C8.97067 2.34078 9.83536 3.09417 10.3983 4.05945C10.9612 5.02473 11.1911 6.14833 11.0525 7.25712C10.9139 8.36592 10.4146 9.39838 9.63143 10.1954C8.84828 10.9925 7.82477 11.5099 6.71858 11.668C5.6124 11.826 4.48493 11.616 3.50989 11.0702C2.53486 10.5243 1.76636 9.67302 1.3228 8.64741C0.87924 7.6218 0.785238 6.47879 1.05528 5.39449C1.07021 5.33474 1.09677 5.27851 1.13344 5.22902C1.17011 5.17954 1.21616 5.13776 1.26898 5.10607C1.32179 5.07438 1.38033 5.05341 1.44125 5.04434C1.50217 5.03528 1.56427 5.0383 1.62403 5.05324C1.68378 5.06817 1.74 5.09474 1.78949 5.1314C1.83897 5.16807 1.88076 5.21412 1.91244 5.26694C1.94413 5.31975 1.96511 5.37829 1.97417 5.43921C1.98324 5.50013 1.98021 5.56224 1.96528 5.62199C1.74629 6.50207 1.82117 7.42963 2.17851 8.26318C2.53584 9.09673 3.15601 9.79053 3.94443 10.2388C4.73285 10.687 5.64623 10.865 6.54527 10.7457C7.44431 10.6264 8.27965 10.2163 8.92388 9.57799C9.56812 8.93967 9.98589 8.10814 10.1135 7.21024C10.241 6.31234 10.0714 5.39735 9.63049 4.60484C9.18955 3.81233 8.5015 3.18579 7.67127 2.82079C6.84104 2.45579 5.91421 2.37236 5.03215 2.58324L5.49465 3.57261C5.53251 3.65341 5.54652 3.74335 5.53504 3.83184C5.52355 3.92033 5.48704 4.0037 5.42981 4.07216C5.37257 4.14062 5.29699 4.19132 5.21193 4.2183C5.12687 4.24529 5.03588 4.24743 4.94965 4.22449L2.58965 3.60199Z"
                          fill="white"
                          fill-opacity="0.6"
                        />
                      </svg>

                      <h2 className="pl-2">Refresh</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* cards second group */}
              <div className="col-span-1 grid gap-4">
                <Card
                  title="Checked-in"
                  content="0"
                  icon={<img src={inOutIcon} alt="" />}
                />
                <Card
                  title="ACTION"
                  content="Generate Special IV’s"
                  icon={<img src={action1} alt="" />}
                  textSize="text-[20px]"
                  />
                <Card
                  title="ACTION"
                  content="Retrieve invitation cards"
                  icon={<img src={action2} alt="" />}
                  textSize="text-[20px]"
                />
              </div>
            </div>
        </>
    )
}

export default MainDashboard;
