import Icon from '@ant-design/icons';
import { GamingIcon, HelpIcon, HistoryIcon, HomeIcon, LibraryIcon, LikedVideosIcon, MusicIcon, NewsIcon, ReportHistoryIcon, SendFeedbackIcon, SettingIcon, ShortIcon, ShowMoreIcon, SportsIcon, SubcriptionIcon, TrendingIcon, WatchLaterIcon, YourVideosIcon } from './IconsYt';
import { Avatar, Divider } from 'antd';

export const SIDEBAR_FIRST = [
    {
        name: 'Home',
        icon: <Icon component={HomeIcon} />,
    },
    {
        name: 'Short',
        icon: <Icon component={ShortIcon} />
    },
    {
        name: 'Subcriptions',
        icon: <Icon component={SubcriptionIcon} />
    },
    <Divider />,
    {
        name: 'Library',
        icon: <Icon component={LibraryIcon} />
    },
    {
        name: 'History',
        icon: <Icon component={HistoryIcon} />
    },
    {
        name: 'Your videos',
        icon: <Icon component={YourVideosIcon} />
    },
    {
        name: 'Watch later',
        icon: <Icon component={WatchLaterIcon} />
    },
    {
        name: 'Liked videos',
        icon: <Icon component={LikedVideosIcon} />
    },
    {
        name: 'Show more',
        icon: <Icon component={ShowMoreIcon} />
    },
    <Divider />

]

const SIDEBAR_SUBCRIPTION = [
    {
        name: "Subscriptions",
    },
    {
        name: "Channel 1",
        icon: <Avatar size={24} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' />
    },
    {
        name: "Channel 2",
        icon: <Avatar size={24} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' />
    },
    {
        name: "Channel 3",
        icon: <Avatar size={24} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' />
    },
    {
        name: "Channel 4",
        icon: <Avatar size={24} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' />
    },
    {
        name: "Channel 5",
        icon: <Avatar size={24} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' />
    },
    <Divider />
]

const SIDEBAR_EXPORE = [
    {
        name: "Explore",
        icon: null
    },
    {
        name: 'Trending',
        icon: <Icon component={TrendingIcon} />,
    },
    {
        name: 'Music',
        icon: <Icon component={MusicIcon} />,
    },
    {
        name: 'Gaming',
        icon: <Icon component={GamingIcon} />,
    },
    {
        name: 'News',
        icon: <Icon component={NewsIcon} />,
    },
    {
        name: 'Sports',
        icon: <Icon component={SportsIcon} />,
    },
    <Divider />
]

const SIDEBAR_MORE = [

]

const SIDEBAR_SETTING = [
    {
        name: 'Settings',
        icon: <Icon component={SettingIcon} />,
    },
    {
        name: 'Report history',
        icon: <Icon component={ReportHistoryIcon} />,
    },
    {
        name: 'Help',
        icon: <Icon component={HelpIcon} />,
    },
    {
        name: 'Send feedback',
        icon: <Icon component={SendFeedbackIcon} />,
    },
    <Divider />
]

export const SIDEBAR_ITEMS = [
    ...SIDEBAR_FIRST,
    ...SIDEBAR_SUBCRIPTION,
    ...SIDEBAR_EXPORE,
    ...SIDEBAR_SETTING,
]