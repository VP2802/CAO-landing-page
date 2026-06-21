import React from 'react';
import './productHighlights.css';

const HIGHLIGHTS = [
  {
    id: 'gold',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 13l22 22M35 13L13 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    label: 'Vàng Thượng Hạng',
    value: 'Vàng trắng · Vàng vàng · Vàng hồng',
    desc: 'Mỗi mảnh Glamorosa được đúc từ vàng nguyên chất tinh tuyển, qua bàn tay nghệ nhân lành nghề với kỹ thuật đúc chính xác.',
    placeholder: true,
    note: '14K / 18K – To be confirmed by CAO',
  },
  {
    id: 'gemstones',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L38 16L33 38H15L10 16L24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 16h28M24 6L15 16M24 6L33 16M15 16L15 38M33 16L33 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    label: 'Đá Quý Hiếm',
    value: 'Sapphire · Topaz · Citrine · Ruby',
    desc: '"Vũ điệu sắc màu" – từng viên đá được tuyển chọn kỹ lưỡng từ các mỏ đá danh tiếng thế giới, đảm bảo độ tinh khiết và màu sắc đỉnh cao.',
    placeholder: false,
  },
  {
    id: 'craftsmanship',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 40L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 28L32 8L40 16L20 28Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Chế Tác Thủ Công',
    value: 'Artisan Handcrafted',
    desc: 'Từng chi tiết nhỏ được chế tác và nạm đá bằng tay bởi các nghệ nhân kim hoàn lành nghề. Không có hai mảnh Glamorosa nào hoàn toàn giống nhau.',
    placeholder: false,
  },
  {
    id: 'limited',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    label: 'Số Lượng Giới Hạn',
    value: 'Limited · Exclusive Pieces',
    desc: 'Mỗi mẫu Glamorosa High Jewellery chỉ được chế tác với số lượng rất giới hạn – đảm bảo tính độc bản và giá trị lâu bền theo thời gian.',
    placeholder: false,
  },
  {
    id: 'bespoke',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L28 16H40L30 23L34 36L24 29L14 36L18 23L8 16H20L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Cá Nhân Hóa',
    value: 'Bespoke · Made for You',
    desc: 'CAO nhận cá nhân hóa Glamorosa theo yêu cầu – tùy chỉnh loại đá, chiều dài dây, khắc tên hoặc ngày kỷ niệm. Chi tiết được tư vấn trong buổi gặp riêng.',
    placeholder: false,
  },
  {
    id: 'warranty',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L38 12V26C38 34 31 40 24 42C17 40 10 34 10 26V12L24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M17 24l5 5 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Đặc Quyền Sở Hữu',
    value: 'Bảo hành · Spa trang sức · Hộp & Chứng nhận',
    desc: 'Sở hữu Glamorosa đi kèm đặc quyền chăm sóc toàn diện: bảo hành chế tác, dịch vụ spa trang sức cao cấp và hộp đựng kèm chứng nhận độc bản.',
    placeholder: true,
    note: 'Chính sách cụ thể – To be confirmed by CAO',
  },
];

export default function ProductHighlights() {
  return (
    <section className="highlights section--alt section" id="highlights" aria-label="Điểm nổi bật Glamorosa">
      <div className="container">
        {/* Header */}
        <div className="highlights__header fade-up">
          <p className="eyebrow">Giá trị vượt trội</p>
          <div className="gold-divider" />
          <h2 className="highlights__title">
            Vì sao chọn<br />
            <span>Glamorosa?</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="highlights__grid">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.id}
              className={`highlights__card fade-up delay-${Math.min(i + 1, 5)}`}
              id={`highlight-${item.id}`}
            >
              <div className="highlights__card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="highlights__card-label eyebrow">{item.label}</div>
              <div className="highlights__card-value">{item.value}</div>
              <p className="highlights__card-desc">{item.desc}</p>
              {item.placeholder && (
                <div className="highlights__placeholder-note" aria-label="Thông tin chờ xác nhận">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
