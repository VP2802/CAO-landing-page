import React, { useState } from 'react';
import { validateField, validateForm, FIELDS } from '../utils/formValidation';
import './consultationForm.css';

const CITIES = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Thành phố khác'];
const ICON_BUILDING = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M10 10h4M10 14h4"/>
  </svg>
);
const ICON_MONITOR = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);
const ICON_CAR = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M5 17h14M5 17a2 2 0 01-2-2V9l3-5h12l3 5v6a2 2 0 01-2 2M5 17v2a1 1 0 001 1h2a1 1 0 001-1v-2M19 17v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2"/>
    <circle cx="8" cy="14" r="1.5"/>
    <circle cx="16" cy="14" r="1.5"/>
    <path d="M5 9h14"/>
  </svg>
);

const METHODS = [
  { value: 'boutique', label: 'Private Viewing tại Boutique CAO', icon: ICON_BUILDING },
  { value: 'online', label: 'Tư vấn online (Video call)', icon: ICON_MONITOR },
  { value: 'home', label: 'Tư vấn tại nhà / văn phòng', icon: ICON_CAR },
];
const TIMES = [
  'Buổi sáng (9:00 – 12:00)',
  'Buổi chiều (13:00 – 17:00)',
  'Buổi tối (18:00 – 20:00)',
  'Cuối tuần – linh hoạt',
  'Sẽ trao đổi sau',
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  city: '',
  method: '',
  time: '',
  note: '',
};

export default function ConsultationForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
  };

  const handleMethodSelect = (value) => {
    setForm((f) => ({ ...f, method: value }));
    if (touched.method) {
      setErrors((err) => ({ ...err, method: validateField('method', value) }));
    }
    setTouched((t) => ({ ...t, method: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(FIELDS).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const { isValid, errors: validationErrors } = validateForm(form);
    setErrors(validationErrors);

    if (!isValid) return;

    setLoading(true);
    // Simulate API call – replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="form-section section" id="consultation" aria-label="Đặt lịch tư vấn Glamorosa">
        <div className="container container--narrow">
          <div className="form-success">
            <div className="form-success__icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 4.8L8 14l-6-4.8h7.6L12 2z"/>
              </svg>
            </div>
            <h2 className="form-success__title">Yêu cầu đã được ghi nhận</h2>
            <p className="form-success__desc">
              Cảm ơn bạn đã quan tâm đến Glamorosa. Chuyên viên tư vấn của CAO sẽ liên hệ
              với bạn trong vòng 24 giờ để sắp xếp buổi gặp riêng.
            </p>
            <p className="form-success__sub">
              Chúng tôi mong được gặp bạn — và cùng tìm chiếc dây cổ dành riêng cho khoảnh khắc của bạn.
            </p>
            <button
              className="btn btn--outline"
              onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); setTouched({}); }}
              id="form-success-reset"
            >
              Gửi yêu cầu khác
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section section" id="consultation" aria-label="Đặt lịch tư vấn Glamorosa">
      <div className="container container--narrow">
        {/* Header */}
        <div className="form-header fade-up">
          <p className="eyebrow">Tư vấn riêng</p>
          <div className="gold-divider" />
          <h2 className="form-header__title">
            Yêu cầu buổi hẹn<br />
            <em>riêng với Glamorosa</em>
          </h2>
          <p className="form-header__desc">
            Không phải "đăng ký". Đây là lời mời đến không gian riêng tư,
            nơi bạn khám phá Glamorosa theo cách của mình –
            cùng chuyên gia tư vấn và nhà tạo mẫu của CAO.
          </p>
        </div>

        {/* Form */}
        <form
          className="consultation-form fade-up delay-1"
          id="consultation-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Form đặt lịch tư vấn"
        >
          {/* Row 1 */}
          <div className="form-row form-row--2">
            <div className="form-group">
              <label htmlFor="form-name" className="form-label">
                Họ & Tên <span aria-hidden="true" className="form-required">*</span>
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                className={`form-input ${errors.name && touched.name ? 'form-input--error' : ''}`}
                placeholder="Nguyễn Thị Anh"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-describedby={errors.name && touched.name ? 'error-name' : undefined}
                autoComplete="name"
              />
              {errors.name && touched.name && (
                <span className="form-error" id="error-name" role="alert">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="form-phone" className="form-label">
                Số điện thoại <span aria-hidden="true" className="form-required">*</span>
              </label>
              <input
                type="tel"
                id="form-phone"
                name="phone"
                className={`form-input ${errors.phone && touched.phone ? 'form-input--error' : ''}`}
                placeholder="0912 345 678"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-describedby={errors.phone && touched.phone ? 'error-phone' : undefined}
                autoComplete="tel"
              />
              {errors.phone && touched.phone && (
                <span className="form-error" id="error-phone" role="alert">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row form-row--2">
            <div className="form-group">
              <label htmlFor="form-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                className={`form-input ${errors.email && touched.email ? 'form-input--error' : ''}`}
                placeholder="anh@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby={errors.email && touched.email ? 'error-email' : undefined}
                autoComplete="email"
              />
              {errors.email && touched.email && (
                <span className="form-error" id="error-email" role="alert">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="form-city" className="form-label">
                Thành phố <span aria-hidden="true" className="form-required">*</span>
              </label>
              <select
                id="form-city"
                name="city"
                className={`form-input form-select ${errors.city && touched.city ? 'form-input--error' : ''}`}
                value={form.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
              >
                <option value="">Chọn thành phố</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.city && touched.city && (
                <span className="form-error" id="error-city" role="alert">{errors.city}</span>
              )}
            </div>
          </div>

          {/* Method */}
          <div className="form-group">
            <p className="form-label">
              Hình thức tư vấn <span aria-hidden="true" className="form-required">*</span>
            </p>
            <div className="form-method-grid" role="group" aria-label="Chọn hình thức tư vấn">
              {METHODS.map((m) => (
                <button
                  key={m.value}
                  type="button"
                  className={`form-method-card ${form.method === m.value ? 'form-method-card--active' : ''}`}
                  onClick={() => handleMethodSelect(m.value)}
                  aria-pressed={form.method === m.value}
                  id={`method-${m.value}`}
                >
                  <span className="form-method-icon" aria-hidden="true">{m.icon}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
            {errors.method && touched.method && (
              <span className="form-error" role="alert">{errors.method}</span>
            )}
          </div>

          {/* Time */}
          <div className="form-group">
            <label htmlFor="form-time" className="form-label">
              Thời gian thuận tiện <span aria-hidden="true" className="form-required">*</span>
            </label>
            <select
              id="form-time"
              name="time"
              className={`form-input form-select ${errors.time && touched.time ? 'form-input--error' : ''}`}
              value={form.time}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
            >
              <option value="">Chọn thời gian</option>
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && touched.time && (
              <span className="form-error" id="error-time" role="alert">{errors.time}</span>
            )}
          </div>

          {/* Note */}
          <div className="form-group">
            <label htmlFor="form-note" className="form-label">
              Dịp / Khoảnh khắc đặc biệt của bạn
            </label>
            <textarea
              id="form-note"
              name="note"
              className="form-input form-textarea"
              placeholder="VD: Kỷ niệm 10 năm, dự gala cuối năm, tự thưởng sau một hành trình dài... Chia sẻ để chúng tôi chuẩn bị buổi tư vấn ý nghĩa nhất cho bạn."
              value={form.note}
              onChange={handleChange}
              rows={4}
              aria-label="Ghi chú về dịp sử dụng hoặc sở thích"
            />
          </div>

          {/* Privacy note */}
          <p className="form-privacy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
              <rect x="5" y="11" width="14" height="10" rx="2"/>
              <path d="M8 11V7a4 4 0 018 0v4"/>
            </svg>
            Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để chuẩn bị cho buổi tư vấn riêng.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className={`btn btn--primary form-submit ${loading ? 'form-submit--loading' : ''}`}
            disabled={loading}
            id="form-submit-btn"
            aria-describedby="form-submit-desc"
          >
            {loading ? (
              <>
                <span className="form-spinner" aria-hidden="true" />
                Đang gửi yêu cầu...
              </>
            ) : (
              <>
                Gửi yêu cầu buổi hẹn riêng
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
          <p id="form-submit-desc" className="form-submit-desc">
            Chuyên viên tư vấn CAO sẽ liên hệ với bạn trong vòng 24 giờ.
          </p>
        </form>
      </div>
    </section>
  );
}
