
import * as React from "react";
import * as Toolpad from "@toolpad/core";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import {
  DARK_THEME,
  LIGHT_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

import CollegeOfNursing
  from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import {
  $innovative_troublemaker$campus_information_system$model
    as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import Footer from "@innovative_troublemaker/campus_information_system/component/Footer.tsx";

import {
  TOOLPAD_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

const NAVIGATION: Toolpad.Navigation = [
  {
    kind: 'header',
    title: 'Academic',
  },
  {
    segment: 'department/college-of-nursing',
    title: 'College of Nursing',
    icon: <MUIIcon.HealthAndSafety />,
  },
  {
    segment: 'department/college-of-engineering',
    title: 'College of Engineering',
    icon: <MUIIcon.Engineering />,
  },
  {
    segment: 'department/college-of-ict',
    title: 'College of ICT',
    icon: <MUIIcon.ComputerRounded />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Administrative',
  },
  {
    segment: 'administrative/scholarship',
    title: 'Scholarship',
    icon: <MUIIcon.Note />,
    children: [
      {
        segment: '1',
        title: 'News',
        icon: <MUIIcon.Newspaper />,
      },
      {
        segment: '2',
        title: 'Voucher',
        icon: <MUIIcon.Description />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <MUIIcon.Layers />,
  },
];

// const demoTheme = MUI.createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { 
//     light: true, 
//     dark: true,
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

export default class ContextProvider0x0004
  extends React.Component<
    $model.ICommonProp,
    $model.ICommonState
  > {
  public constructor(
    props: globalThis.Readonly<$model.ICommonProp>
  ) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.headerState?.title
    }
  }


  // public render(): React.ReactElement {
  //   return (<>
  //     <Toolpad.AppProvider
  //       theme={TOOLPAD_THEME}
  //       navigation={NAVIGATION}
  //       branding={
  //         {
  //           title: `${this.state.title}`,
  //           logo: ``
  //         }
  //       }>
  //       <Toolpad.DashboardLayout>
  //         {this.props.children}
  //         <Footer id={this.state.id}/>
  //       </Toolpad.DashboardLayout>
  //     </Toolpad.AppProvider>
  //   </>);
  // }

  public render(): React.ReactElement {
    return (<>
          {this.props.children}
    </>);
  }
}