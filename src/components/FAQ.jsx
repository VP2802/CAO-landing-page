import React, { useState } from 'react';
import './faq.css';

const FAQS = [
  {
    id: 'faq-line',
    q: 'Dây cổ Glamorosa thuộc dòng sản phẩm nào của CAO?',
    a: 'Dây cổ Glamorosa được định vị trong dòng HIGH JEWELLERY của CAO Fine Jewellery – tầng sản phẩm cao cấp nhất, chỉ được chế tác với số lượng rất giới hạn. Đây là những tác phẩm nghệ thuật đích thực, không chỉ là trang sức. Ngoài ra, bộ sưu tập Glamorosa còn có dòng Fine Jewellery (bông tai, nhẫn, mặt dây...) hỗ trợ phụ kiện đi kèm.',
  },
  {
    id: 'faq-bespoke',
    q: 'Tôi có thể cá nhân hóa dây cổ Glamorosa không?',
    a: 'Có. CAO nhận cá nhân hóa Glamorosa theo yêu cầu của bạn: tùy chỉnh loại đá màu (trong phạm vi kỹ thuật cho phép), điều chỉnh chiều dài dây, hoặc khắc tên/ngày kỷ niệm lên phần khóa/tag. Thời gian và chi tiết bespoke sẽ được tư vấn cụ thể trong buổi gặp riêng với chuyên gia của CAO.',
  },
  {
    id: 'faq-warranty',
    q: 'Chính sách bảo hành và chăm sóc sản phẩm Glamorosa như thế nào?',
    a: 'Sở hữu Glamorosa đi kèm các đặc quyền chăm sóc toàn diện từ CAO, bao gồm bảo hành chế tác, dịch vụ spa trang sức cao cấp và chứng nhận độc bản. Chi tiết về thời hạn và điều khoản cụ thể sẽ được cung cấp đầy đủ trong buổi tư vấn và tài liệu bàn giao sản phẩm.',
  },
  {
    id: 'faq-private',
    q: 'Quy trình đặt lịch Private Viewing như thế nào?',
    a: 'Sau khi gửi yêu cầu qua form trên trang này, chuyên viên tư vấn của CAO sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận lịch hẹn. Buổi Private Viewing thường diễn ra tại boutique CAO hoặc theo hình thức tư vấn online/tại nơi bạn mong muốn, được thiết kế riêng cho từng khách hàng, không vội vàng và hoàn toàn không áp lực.',
  },
  {
    id: 'faq-price',
    q: 'Giá của dây cổ Glamorosa là bao nhiêu?',
    a: 'Glamorosa High Jewellery được định giá tương xứng với giá trị nghệ thuật, nguyên liệu quý hiếm và tay nghề chế tác. Thông tin giá sẽ được trao đổi trực tiếp trong buổi tư vấn riêng – nơi bạn cũng có thể cảm nhận trực tiếp vẻ đẹp của sản phẩm trước khi quyết định.',
  },
  {
    id: 'faq-delivery',
    q: 'CAO có giao hàng tận nơi cho khách hàng VIP không?',
    a: 'CAO Fine Jewellery có dịch vụ vận chuyển đặc biệt cho khách hàng VIP. Chi tiết về hình thức và khu vực hỗ trợ sẽ được tư vấn dựa trên yêu cầu và địa điểm của bạn trong buổi gặp riêng.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section className="faq section" id="faq" aria-label="Câu hỏi thường gặp về Glamorosa">
      <div className="container">
        <div className="faq__layout">
          {/* Header */}
          <div className="faq__header fade-up">
            <p className="eyebrow">FAQ</p>
            <div className="gold-divider gold-divider--left" />
            <h2 className="faq__title">
              Câu hỏi<br />
              <em>thường gặp</em>
            </h2>
            <p className="faq__subtitle">
              Những điều bạn muốn biết về Glamorosa –
              và những điều chúng tôi sẽ giải đáp trực tiếp trong buổi tư vấn riêng.
            </p>
            <div className="faq__cta">
              <p className="faq__cta-text">Còn câu hỏi khác?</p>
              <a
                href="https://caofinejewellery.com.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                id="faq-contact-link"
              >
                Liên hệ trực tiếp với CAO
              </a>
            </div>
          </div>

          {/* Accordion */}
          <dl className="faq__list fade-up delay-1">
            {FAQS.map((faq, i) => (
              <div
                key={faq.id}
                className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`}
                id={faq.id}
              >
                <dt>
                  <button
                    className="faq__question"
                    onClick={() => toggle(i)}
                    aria-expanded={openIdx === i}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-btn`}
                  >
                    <span>{faq.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className="faq__answer"
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-btn`}
                  hidden={openIdx !== i}
                >
                  <p>{faq.a}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
