import React from 'react';
import Typography from '@mui/material/Typography';
import * as MUIIcon from '@mui/icons-material';
import ViewCollegeOfNursing from './view/ViewCollegeOfNursing';

class Navigation {
  // Define a reusable mapping of segments to components and icons.
  private static NAVIGATION_STRUCTURE = [
    { kind: 'header', title: 'Academic' },
    { segment: 'library', title: 'Library', icon: <MUIIcon.LocalLibrarySharp />, component: () => <>Library Page</> },
    {
      segment: 'department',
      title: 'Department',
      icon: <MUIIcon.SchoolSharp />,
      children: [
        { segment: 'college-of-nursing', title: 'College of Nursing', icon: <MUIIcon.Description />, component: () => <ViewCollegeOfNursing/>},
        { segment: 'college-of-engineering', title: 'College of Engineering', icon: <MUIIcon.Description />, component: () => <>College Of Engineering Page</> },
      ],
    },
    { kind: 'divider' },
    { kind: 'header', title: 'Administrative' },
    {
      segment: 'office-of-student-affairs',
      title: 'OSA',
      icon: <MUIIcon.BarChart />,
      children: [
        { segment: 'news', title: 'News', icon: <MUIIcon.Description />, component: () => <>OSA News Page</> },
        { segment: 'event', title: 'Event', icon: <MUIIcon.Description />, component: () => <>OSA Event Page</> },
      ],
    },
    { segment: 'integrations', title: 'Integrations', icon: <MUIIcon.Layers />, component: () => <>Integrations Page</> },
  ];

  // Method to dynamically generate both page titles and content components based on the navigation structure
  private static generatePageMappings() {
    const titles: Record<string, string> = { '/': 'Home' };
    const components: Record<string, React.FC> = { '/': () => <>Home</> };

    function addMappings(items: any[], parentPath: string = '') {
      items.forEach(item => {
        if (item.segment) {
          const path = `${parentPath}/${item.segment}`;
          titles[path] = item.title;
          components[path] = item.component || (() => <Typography>Page not found</Typography>);
          if (item.children) {
            addMappings(item.children, path);
          }
        }
      });
    }

    addMappings(Navigation.NAVIGATION_STRUCTURE);
    return { titles, components };
  }

  private static MAPPINGS = Navigation.generatePageMappings();

  // Method to get the title based on the current pathname
  public static getTitle(pathname: string): string {
    return Navigation.MAPPINGS.titles[pathname] || 'Page not found';
  }

  // Method to get the page content component based on the current pathname
  public static getPageContentComponent(pathname: string): React.FC {
    return Navigation.MAPPINGS.components[pathname] || (() => <Typography>Page not found</Typography>);
  }

  // Method to transform the navigation structure for AppProvider
  public static getAppProviderNavigationStructure() {
    function transformStructure(items: any[], parentPath: string = ''): any[] {
      return items
        .filter(item => item.segment || item.kind === 'header' || item.kind === 'divider')
        .map(item => {
          if (item.kind === 'header' || item.kind === 'divider') {
            return { kind: item.kind, title: item.title };
          }
          const path = `${parentPath}/${item.segment}`;
          const result: any = {
            title: item.title,
            path: path,
            icon: item.icon,
          };
          if (item.children) {
            result.children = transformStructure(item.children, path);
          }
          return result;
        });
    }

    return transformStructure(Navigation.NAVIGATION_STRUCTURE);
  }
}

export default Navigation;
