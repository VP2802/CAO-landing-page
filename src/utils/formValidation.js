/* ============================================
   FORM VALIDATION UTILITY
   ============================================ */

/**
 * Vietnamese phone number regex
 * Covers: 03x, 05x, 07x, 08x, 09x (10 digits) and 84xxxxxxxxx
 */
const VN_PHONE_REGEX = /^(0|\+84)(3[2-9]|5[2689]|7[06789]|8[1-9]|9[0-9])[0-9]{7}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FIELDS = {
  name: {
    required: true,
    minLength: 2,
    label: 'Họ & Tên',
  },
  phone: {
    required: true,
    pattern: VN_PHONE_REGEX,
    label: 'Số điện thoại',
  },
  email: {
    required: false,
    pattern: EMAIL_REGEX,
    label: 'Email',
  },
  city: {
    required: true,
    label: 'Thành phố',
  },
  method: {
    required: true,
    label: 'Hình thức tư vấn',
  },
  time: {
    required: true,
    label: 'Thời gian thuận tiện',
  },
};

/**
 * Validates a single form field value
 * @param {string} fieldName - Key from FIELDS
 * @param {string} value - Current field value
 * @returns {string|null} Error message or null if valid
 */
export function validateField(fieldName, value) {
  const rules = FIELDS[fieldName];
  if (!rules) return null;

  const trimmed = typeof value === 'string' ? value.trim() : value;

  if (rules.required && (!trimmed || trimmed === '')) {
    return `${rules.label} là thông tin bắt buộc.`;
  }

  if (!trimmed && !rules.required) return null;

  if (rules.minLength && trimmed.length < rules.minLength) {
    return `${rules.label} cần ít nhất ${rules.minLength} ký tự.`;
  }

  if (rules.pattern && !rules.pattern.test(trimmed)) {
    if (fieldName === 'phone') return 'Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng Việt Nam.';
    if (fieldName === 'email') return 'Địa chỉ email không hợp lệ.';
    return `${rules.label} không đúng định dạng.`;
  }

  return null;
}

/**
 * Validates entire form data object
 * @param {Object} formData
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validateForm(formData) {
  const errors = {};
  let isValid = true;

  Object.keys(FIELDS).forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName] || '');
    if (error) {
      errors[fieldName] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
}
