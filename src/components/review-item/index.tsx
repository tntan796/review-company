import React from 'react';
import { Rating } from 'primereact/rating';
import './styles.scss';
import { Button } from 'primereact/button';
function ReviewItem() {
    return (
        <div className="review-item-wrapper">
            <div className="review-item">
                <div className="header">
                    <div className="left">
                        <div className="icon">
                            <i className="pi pi-user"></i>
                        </div>
                        <div className="name">Ẩn danh</div>
                    </div>
                    <div className="right">
                        <div className="time">10 ngày trước</div>
                    </div>
                </div>
                <div className="content p-mt-2">
                    Xin chào, mình đam mê công nghệ lập trình, được code là mình vui rồi, vì mình code , mình có dự án để trên github chủ đề trang web bán hàng java shopping cart, mình học bên trung tâm nhất nghệ. Thầy giáo mình cũng là người của fpt. Công nghệ mình không sợ ngôn ngữ nào cả, đối với mình công nghệ về máy tính đều là niềm vui. Tiền nong mình không quan tâm lắm, chỉ là cần được code thôi. Mình đã trải qua nhiều nghề để kiếm sống, dù thu nhập cao nhưng mình vẫn muốn đi theo con đường lập trình này, thà code mệt mà vui vẻ.
                </div>
                <div className="action-wrapper p-mt-2">
                    <div className="action">
                        <Button label="Thích" className="p-button-text" icon="pi pi-thumbs-up" />
                        <Button label="Ghét" className="p-button-danger p-button-text" icon="pi pi-thumbs-down" />
                    </div>
                    <div className="rating">
                        <Rating value={3} cancel={false} disabled stars={5} />
                    </div>
                </div>
            </div>
            <div className="replies-wrapper">
                <div className="reply-list">
                    <div className="review-item">
                        <div className="header">
                            <div className="left">
                                <div className="icon">
                                    <i className="pi pi-user"></i>
                                </div>
                                <div className="name">Ẩn danh
                                    <span className="p-ml-1">
                                        đã <i className="pi pi-thumbs-up"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="time">10 ngày trước</div>
                            </div>
                        </div>
                        <div className="content p-mt-2">
                            Xin chào, mình đam mê công nghệ lập trình, được code là mình
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="header">
                            <div className="left">
                                <div className="icon">
                                    <i className="pi pi-user"></i>
                                </div>
                                <div className="name">Ẩn danh
                                    <span className="p-ml-1">
                                        đã <i className="pi pi-thumbs-down"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="time">10 ngày trước</div>
                            </div>
                        </div>
                        <div className="content p-mt-2">
                            Xin chào, mình đam mê công nghệ lập trình, được code là mình
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;