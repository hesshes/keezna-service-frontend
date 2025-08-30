import { useEffect, useState } from "react";
import "../../assets/css/comp/image.scss";
import { loadConfig } from "../../config";
const Image = (): JSX.Element => {
    const [apiUrl, setApiUrl] = useState("");
    useEffect(() => {
        loadConfig().then((cfg) => setApiUrl(cfg.API_URL));
    }, []);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = e.currentTarget.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        } else {
            setFile(null);
        }
    };

    const handleImageConvert = (): void => {
    };
    return (
        <>
            <div id="image__wrapper">
                <div className="image__upload">
                    <label htmlFor="imageUpload" className="custom-file-upload">
                        이미지 업로드
                    </label>
                    <span>
                        {file == null ? "선택된 파일이 없습니다" : file.name}
                    </span>
                    <input
                        type="file"
                        id="imageUpload"
                        name="image"
                        onChange={handleFileChange}
                    />
                </div>
                <button onClick={handleImageConvert}>전송</button>
            </div>
        </>
    );
};

export default Image;
