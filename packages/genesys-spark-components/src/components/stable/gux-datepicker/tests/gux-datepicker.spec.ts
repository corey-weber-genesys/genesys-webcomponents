import { newSpecPage } from '@stencil/core/testing';

import { GuxDatepicker } from '../gux-datepicker';

const components = [GuxDatepicker];
const language = 'en';

describe('gux-datepicker', () => {
  it('should build', async () => {
    const page = await newSpecPage({
      components,
      html: `<gux-datepicker></gux-datepicker>`,
      language
    });
    expect(page.rootInstance).toBeInstanceOf(GuxDatepicker);
  });

  describe('#render', () => {
    [
      `<gux-datepicker value="1997-08-15"></gux-datepicker>`,
      `<gux-datepicker value="1997-08-15" format="mm/dd/yy"></gux-datepicker>`,
      `<gux-datepicker value="1997-08-15" format="mm.dd.yyyy"></gux-datepicker>`,
      `<gux-datepicker value="1997-08-15" disabled></gux-datepicker>`,
      `<gux-datepicker mode="range" value="2019-11-25/2019-12-02" number-of-months="2" ></gux-datepicker>`,
      `<gux-datepicker mode="range" value="2019-11-25/2019-12-02" min-date="2019-11-10" max-date="2019-12-31" number-of-months="2" ></gux-datepicker>`,
      `<gux-datepicker mode="range" value="2019-11-25/2019-12-02" min-date="2019-11-10" max-date="2019-12-31" number-of-months="2" format="mm.dd.yyyy" ></gux-datepicker>`,
      `<gux-datepicker mode="range" value="2019-11-25/2019-12-02" number-of-months="2" disabled></gux-datepicker>`,
      `<gux-datepicker value="1997-08-15" start-day-of-week="6"></gux-datepicker>`,
      `<gux-datepicker value="1997-08-15" start-day-of-week="6"><div slot="footer">Footer</div></gux-datepicker>`
    ].forEach((input, index) => {
      it(`should render component as expected (${index + 1})`, async () => {
        const page = await newSpecPage({
          components,
          html: input,
          language
        });

        expect(page.root).toMatchSnapshot();
      });
    });
  });
});
