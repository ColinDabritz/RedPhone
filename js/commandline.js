
// when the document is ready, do initial command line wiring
$( document ).ready(function()
{
  // set up command REPL

  var historySerial = 0;

  // handle submit behavior for the command line
  $( "form[name='command-line']" ).submit(function( event ){

    // get full text of command
    var command = $('#command-entry').val();

    // add a div to the history for the command result
    var resultDiv = $('<div class="command" />')
      .text('$ ' + command)
      .attr("id",'history-entry-' + historySerial++)
      .appendTo('#history');

    // execute the command
    // note command will handle adding results
    dispatch(command, resultDiv);

    // clear the command entry
    $('#command-entry').val('');

    // suppress normal submit behavior
    // commands are handled by above code
    event.preventDefault();
  });
});

// dispatches the command, providing execution and results
function dispatch(command, resultDiv)
{
  var commandName = command.split(' ')[0]; // could be nil?

  switch(commandName)
  {
    case "pwd":
      command_pwd(command, resultDiv);
      break;
    case "ls":
      command_ls(command, resultDiv);
      break;
    case "cd":
      command_cd(command, resultDiv);
      break;
    case "clear":
      command_clear(command, resultDiv);
      break;
    default:
      output(commandName + ": Command not found",resultDiv);
  }
}

function working_directory()
{
  return $('#pwdterm1').text();
}

// pwd - print working directory
function command_pwd(command, resultDiv)
{
    output(working_directory(),resultDiv);
}

// ls - list directory contents
function command_ls(command, resultDiv)
{
  // flags
  var showHidden = false;
  var longListing = false;

  var showLabels = false;

  var args = command.split(' ').reverse();

  // remove 'ls' command
  args.pop();


  var maybeFlags = args.pop(); // pop args off the stack

  if( typeof maybeFlags != 'undefined' // e.g. has arguments
          && maybeFlags.length >= 2 // room for at least "-l" one letter 
          && maybeFlags[0] == "-") // starts with flag indicator
  {
    // handle flags!

    // temp:
    output('had some flags.',resultDiv);
  }
  else
  {
    // not flags, replace it on the stack
    args.push(maybeFlags);
  }

  if(args.length > 1) // more that one directory
  {
    showLabels = true;
  }

  var currentDir = args.pop(); // get first argument (post flags)

  if(typeof currentDir == 'undefined') // no first argument
  {
    // use current directory by default
    currentDir = working_directory();
  }

  while(typeof currentDir != 'undefined')
  {
      // if showLabels e.g.
      // mydir: no such file or directory
      // listing here

      // temp:
      // print directories
      output(currentDir,resultDiv);

      // get next directory
      currentDir = args.pop();
  }

  // if no directory, use working directory
  // get contents
  // if no directory specified..
}

// cd - change working directory
function command_cd(command, resultDiv)
{
  output("cd: command not implemented", resultDiv);
}

function command_clear(command, resultDiv)
{
  $('div.command').hide();
}

// adds command results to the div
function output(output, resultDiv)
{
    $('<div class="result" />').text(output).appendTo(resultDiv);
}

// as commands are typed, give help and support
