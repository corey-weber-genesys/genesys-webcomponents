import { newSparkE2EPage, a11yCheck } from '../../../../test/e2eTestUtils';

const axeExclusions = [];

describe('gux-month-picker-beta', () => {
  it('renders with value set', async () => {
    const html =
      '<gux-month-picker-beta value=2022-01></gux-month-picker-beta>';
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-month-picker-beta');

    await a11yCheck(page, axeExclusions);

    expect(element.innerHTML).toMatchSnapshot();
  });

  it('renders with no value set', async () => {
    const html = '<gux-month-picker-beta></gux-month-picker-beta>';
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-month-picker-beta');

    await a11yCheck(page, axeExclusions);

    expect(element.innerHTML).toMatchSnapshot();
  });

  it('renders a footer section', async () => {
    const page = await newSparkE2EPage({
      html: `<gux-month-picker-beta>
          <div slot="footer">Footer</div>
        </gux-month-picker-beta>`
    });
    const monthpicker = await page.find('gux-month-picker-beta');
    const element = await monthpicker.find('pierce/.gux-footer');

    expect(element).toBeTruthy();
    expect(element.innerHTML).toEqual(`<slot name="footer"></slot>`);
  });
});
