import "../../assets/css/comp/image.scss";
const Image = (): JSX.Element => {
    return (
        <>
            <div id="image__wrapper">
                <div>
                    <label htmlFor="imageUpload" className="custom-file-upload">
                        이미지 업로드
                    </label>
                    <input type="file" id="imageUpload" name="image" />
                </div>
                <div>
                    <h1>결과화면 보여줄거</h1>
                </div>
            </div>
        </>
    );
};

export default Image;
