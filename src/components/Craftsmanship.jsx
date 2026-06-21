import React from 'react';
import './craftsmanship.css';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tuyển chọn đá quý',
    desc: 'Từng viên đá được tuyển chọn trực tiếp từ các mỏ đá danh tiếng thế giới. Chỉ những viên đạt tiêu chuẩn màu sắc, độ tinh khiết và carat tuyệt vời nhất mới được chọn cho Glamorosa.',
  },
  {
    step: '02',
    title: 'Phác thảo & thiết kế',
    desc: 'Mỗi mẫu Glamorosa bắt đầu từ bản phác thảo tay của người thợ kim hoàn – nơi cảm hứng từ sắc hoa được chuyển hóa thành ngôn ngữ của đường chỉ vàng và ánh đá.',
  },
  {
    step: '03',
    title: 'Đúc & tạo hình vàng',
    desc: 'Vàng thượng hạng được đúc theo khuôn riêng, sau đó chỉnh hình thủ công bởi nghệ nhân lành nghề để đạt đường cong hoàn hảo và độ bóng sáng đặc trưng của High Jewellery.',
  },
  {
    step: '04',
    title: 'Nạm đá thủ công',
    desc: 'Kỹ thuật nạm đá cao cấp (pavé, prong, bezel) được thực hiện hoàn toàn bằng tay – đòi hỏi sự tập trung tuyệt đối để mỗi viên đá ngồi chính xác trong lòng vàng.',
  },
  {
    step: '05',
    title: 'Kiểm định & hoàn thiện',
    desc: 'Mỗi sản phẩm trải qua kiểm định nghiêm ngặt về kỹ thuật và thẩm mỹ trước khi được đóng gói trong hộp Glamorosa kèm chứng nhận độc bản từ CAO Fine Jewellery.',
  },
];

export default function Craftsmanship() {
  return (
    <section className="craft section" id="craftsmanship" aria-label="Nghệ thuật chế tác Glamorosa">
      <div className="container">
        <div className="craft__layout">
          {/* Left – Image column */}
          <div className="craft__visual slide-left">
            <div className="craft__image-main">
              <img
                src="/images/craft-main.jpg"
                alt="Nghệ nhân kim hoàn chế tác dây cổ Glamorosa"
                loading="lazy"
              />
            </div>
            <div className="craft__image-secondary">
              <img
                src="/images/craft-secondary.jpg"
                alt="Chi tiết nạm đá thủ công – Glamorosa"
                loading="lazy"
              />
              <div className="craft__hours-badge">
                <div className="craft__hours-number">
                  —
                  <span className="craft__hours-note">*</span>
                </div>
                <div className="craft__hours-label">giờ chế tác</div>
                <div className="craft__hours-sub">*Sẽ xác nhận cùng CAO</div>
              </div>
            </div>
          </div>

          {/* Right – Content column */}
          <div className="craft__content slide-right">
            <p className="eyebrow">Nghệ thuật chế tác</p>
            <div className="gold-divider gold-divider--left" />
            <h2 className="craft__title">
              Đỉnh cao tay nghề<br />
              <em>kim hoàn Việt</em>
            </h2>
            <p className="craft__intro">
              Mỗi dây cổ Glamorosa là kết tinh của hàng trăm giờ lao động nghệ thuật.
              Từ từng đường đúc vàng đến từng viên đá được đặt vào vị trí hoàn hảo –
              tất cả đều được thực hiện bằng tay, với sự tập trung và đam mê tuyệt đối.
            </p>

            {/* Steps */}
            <ol className="craft__steps" aria-label="Quy trình chế tác">
              {PROCESS_STEPS.map((s) => (
                <li key={s.step} className="craft__step">
                  <div className="craft__step-num" aria-hidden="true">{s.step}</div>
                  <div className="craft__step-body">
                    <h3 className="craft__step-title">{s.title}</h3>
                    <p className="craft__step-desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Bespoke CTA */}
            <div className="craft__bespoke">
              <div className="craft__bespoke-icon" aria-hidden="true">✦</div>
              <div>
                <h3 className="craft__bespoke-title">Cá nhân hóa theo yêu cầu</h3>
                <p className="craft__bespoke-desc">
                  CAO nhận cá nhân hóa Glamorosa – tùy chỉnh loại đá, chiều dài dây
                  hoặc khắc tên/ngày kỷ niệm trên khóa. Thời gian chế tác bespoke
                  sẽ được tư vấn chi tiết trong buổi gặp riêng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
