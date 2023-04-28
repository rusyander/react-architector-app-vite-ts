import { render, screen } from '@testing-library/react';
import LinkedIn from './LinkedIn';

describe('LinkedIn', () => {
  test('full render LinkedIn module ', () => {
    render(<LinkedIn />);

    const linkedInIcon = screen.getByAltText('icon');
    const about = screen.getByText('About');
    const accesibility = screen.getByText('Accesibility');
    const helpCenter = screen.getByText('Help Center');
    const privacyTerms = screen.getByText('Privacy & Terms');
    const advertising = screen.getByText('Advertising');
    const businessServices = screen.getByText('Business Services');
    const downloadApps = screen.getByText('Download Apps');
    const more = screen.getByText('More');

    const allCheckboxes = screen.getAllByRole('checkbox');
    const linkedInLabels = screen.getAllByTestId('linkedIn-label');

    expect(linkedInIcon).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(accesibility).toBeInTheDocument();
    expect(helpCenter).toBeInTheDocument();
    expect(privacyTerms).toBeInTheDocument();
    expect(advertising).toBeInTheDocument();
    expect(businessServices).toBeInTheDocument();
    expect(downloadApps).toBeInTheDocument();
    expect(more).toBeInTheDocument();

    expect(allCheckboxes).toHaveLength(8);
    expect(linkedInLabels).toHaveLength(8);
  });
});
