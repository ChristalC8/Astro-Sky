export const SITE_TITLE = "Christal";
export const SITE_DESCRIPTION = `
    Transforming ideas into impactful designs.

    Christal Caton, your go-to graphic designer in the Northern Rivers, NSW, 
    for branding, print, and digital media.
`;

// Example of rendering this in a React component
const SiteHeader = () => (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <h1 style={{ marginBottom: '10px' }}>{SITE_TITLE}</h1>
        <p style={{ marginTop: '10px' }}>{SITE_DESCRIPTION}</p>
    </div>
);

export default SiteHeader;















