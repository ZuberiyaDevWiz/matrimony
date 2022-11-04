import { SidebarLinks } from 'constants/links';

const Sidebar = () => (
    <>
        {SidebarLinks.map((sidebar) => (
            // eslint-disable-next-line react/jsx-key
            <div>
                title={sidebar.title} link={sidebar.link}
            </div>
        ))}
    </>
);
export default Sidebar;
