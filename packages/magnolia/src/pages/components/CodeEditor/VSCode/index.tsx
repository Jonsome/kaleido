import './icon-theme.css';
import './workbench-theme.css';

import getTemplate from '../../../../templates';
import getUI from '../../../../templates/configuration/ui';
import theme from '../../../../theme';
import { useOvermind } from '../../../../overmind';
import { json } from 'overmind';
import React, { useEffect, useRef } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Configuration } from './Configuration';
import { Container, GlobalStyles } from './elements';

export const VSCode: React.FunctionComponent = () => {
  const { state, actions, effects } = useOvermind();
  const containerEl = useRef(null);

  const getCurrentModule = React.useCallback(
    () => state.editor.currentModule,
    [] // eslint-disable-line
  );

  useEffect(() => {
    const rootEl = containerEl.current;
    const mainContainer = effects.vscode.getEditorElement(
      (modulePath: string) => {
        const template = getTemplate(state.editor.currentSandbox.template);
        const config = template.configurationFiles[modulePath];

        const ui = config && getUI(config.type);
        return (
          ui &&
          ui.ConfigWizard &&
          ((container, extraProps) =>
            render(
              <ThemeProvider theme={theme}>
                <Configuration
                  onChange={(code, moduleShortid) =>
                    actions.editor.codeChanged({ code, moduleShortid })
                  }
                  // Copy the object, we don't want mutations in the component
                  currentModule={json(getCurrentModule())}
                  config={config}
                  sandbox={state.editor.currentSandbox}
                  {...(extraProps as any)}
                />
              </ThemeProvider>,
              container
            ))
        );
      }
    );

    rootEl.appendChild(mainContainer);
    const { width, height } = rootEl.getBoundingClientRect();
    effects.vscode.updateLayout(width, height);

    document.getElementById('root').classList.add('monaco-shell');

    return () => {
      document.getElementById('root').classList.remove('monaco-shell');
    };
  }, [
    actions.editor,
    effects.vscode,
    state.editor.currentSandbox,
    state.editor.currentSandbox.template,
    getCurrentModule,
  ]);

  return (
    <Container id="vscode-container" ref={containerEl}>
      <GlobalStyles />
    </Container>
  );
};
