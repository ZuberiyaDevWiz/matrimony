import { SidebarLinks } from 'Constant/Links';

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
