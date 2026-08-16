/** Single source of truth for the details repeated across the site chrome. */
export const site = {
    name: 'Sabrina Delila Telis',
    brand: 'Sabrina Delila Arts',
    role: 'Graphic Designer & Illustrator',
    location: 'Apollo Beach, FL',
    // 9 February 1996. Held as parts rather than a string so it never depends on
    // how a browser parses a date — `new Date('1996-02-09')` is read as UTC and
    // lands on the 8th anywhere west of Greenwich.
    birthDate: { year: 1996, month: 2, day: 9 },
    // The design's Gallery/Project pages used a placeholder hello@ address;
    // this is the address the live site has always used.
    email: 'sabrinadelilaarts@gmail.com',
    instagram: 'https://www.instagram.com/sabrinadelilaarts/',
    etsy: 'https://www.etsy.com/shop/SabrinaDelilaArts',
    resume: '/public/assets/sabrina_resume_2026.pdf'
} as const

/**
 * Whole years since `site.birthDate`, so the About note stays right on its own
 * instead of needing an edit every February. Measured against the reader's local
 * date, which is when they would consider the birthday to have passed.
 */
export const currentAge = (today: Date = new Date()): number => {
    const { year, month, day } = site.birthDate
    const age = today.getFullYear() - year
    // getMonth() is zero-based; birthDate.month is not.
    const month0 = today.getMonth() + 1
    const beforeBirthday = month0 < month || (month0 === month && today.getDate() < day)
    return beforeBirthday ? age - 1 : age
}

export const marqueeWords = ['Illustration', 'Brand Identity', 'Editorial', 'Acrylic Painting', 'UI & UX'] as const
