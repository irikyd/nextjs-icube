import Typography from '@mui/material/Typography';

export default function Flexrow({ title, children, ...props }) {
    return (
        <div style={{ marginBottom: '20px'}} { ...props }>
            <Typography variant="h5" component="h5" gutterBottom>
                { title }
            </Typography>
            { children }
        </div>
    );
}