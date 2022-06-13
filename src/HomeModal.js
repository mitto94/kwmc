import ReactModal from 'react-modal';
import Schedule from "./pages/program/Image/schedule.jpg";
import mSchedule from "./pages/program/Image/mSchedule.jpg";

const MyModal = ({ isOpen, onSubmit, onCancel, onCancelToday }) => {
    const handleClickSubmit = () => {
        onSubmit();
      };
      const handleClickCancel = () => {
        onCancel();
      };
      const handleClickCancelToday = () => {
        onCancelToday();
      };
  return (
    <ReactModal isOpen={isOpen} style={{overlay: {zIndex: 1001, padding: "0px", maxWidth: "100%", height: "fit-content"}, content: {padding: 0, height: "min-content", width: "fit-content"}}}>
      <div className="notosanskr" style={{width: "fit-content"}}>
        <div className="mTextSize2" style={{display: "flex", justifyContent: "center", marginTop: "1vw", marginBottom: "1vw", color: "#143674", fontWeight: "700"}}>2022 KWMC 제9차 한인세계선교대회 시간표</div>
        <div style={{width: "fit-content", display: "flex", justifyContent: "center"}}>
            <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "fit-content"}} >
            <img style={{height: "80vh"}} src={Schedule} alt="pictureSchedule"></img>
            </div>
            <div className="MobImage" style={{display: "flex", justifyContent: "center", maxHeight: "80vh", width: "fit-content"}} >
            <img style={{height: "70vh", maxWidth: "80vw"}} src={mSchedule} alt="pictureSchedule"></img>
            </div>
        </div>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
      <button onClick={handleClickCancelToday}>오늘 하루동안 안보기</button>
      <button onClick={handleClickCancel}>닫기</button>
      </div>
    </ReactModal>
  );
};

export default MyModal;