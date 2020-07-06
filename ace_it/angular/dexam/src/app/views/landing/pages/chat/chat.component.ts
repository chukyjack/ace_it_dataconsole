import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ChatService} from "./chat.service";
import {SortPaginateTableService} from "../../components/sort-paginate-table/sort-paginate-table.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public chats;
  public socket;
  public socketRef;
  public callbacks = {};
  public SOCKET_URL = 'ws://127.0.0.1:8000';
  public session;
  public userId;
  public chatID;
  public userName;
  public msgdata = '';
  public messages;
  public livemessages;


  constructor(private _chatService: ChatService, private _expandPaginateTableService: SortPaginateTableService) {
      console.log('run constructor');
  }

  ngOnInit() {
      this.getSessionDetails();
      this.chatID = this.getChats();
      // this.fetchMessages(
      //     this.userName,
      //     this.chatID
      // );
      this.connect();
      console.log('run ngonit');
  }

  getSessionDetails() {
    this._expandPaginateTableService.setUserSessionDetails().subscribe(
        res => {
            console.log(Object.values(res));
            console.log('    ');
            console.log(JSON.stringify(res));
            this.session = res;
            this.userId = res['user_id'];
            this.userName = res['username'];
            console.log('this is th session');
            console.log('this is th session');
            console.log(this.session);

        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
  getChats() {
    this._chatService.list().subscribe(
        res => {
          console.log(Object.values(res));
          console.log('    ');
          console.log(JSON.stringify(res));
          this.chats = Array.from(Object.values(res)[1]);
          console.log(this.chats);
          console.log(this.chats[0].id);
          console.log(this.chatID == null);
          if (this.chatID == null) { this.chatID = this.chats[0].id; console.log(this.chatID); }
          this.messages = Array.from(this.chats[0].messages);
          return this.chats[0].id;
        },
        err => console.error(err),
        () => console.log('successful')
    );
  }
    getMessageforChats(id: number) {
        this._chatService.list().subscribe(
            res => {
                console.log(Object.values(res));
                console.log('    ');
                console.log(JSON.stringify(res));
                this.chats = Array.from(Object.values(res)[1]);
            },
            err => console.error(err),
            () => console.log('successful')
        );
    }
    // setsock(id: number) {
    //     this.socket = new WebSocket('ws://' + window.location.host + '/chat/' + id + '/');
    //
    //     this.socket.onopen = () => {
    //         console.log('WebSockets connection created.');
    //     };
    // }
    connect() {
      // this.chatID = this.getChats();
        const path = `${this.SOCKET_URL}/ws/chat/4/`;
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            console.log('WebSocket open');
            console.log(path);
            // this.fetchMessages('madmin', 4);
        };
        this.socketRef.onmessage = e => {
            this.socketNewMessage(e.data);
            console.log('onmessage is been assigneed function');
        };
        this.socketRef.onerror = e => {
            console.log(e.message);
        };
        this.socketRef.onclose = () => {
            console.log('WebSocket closed lets reopen');
            // console.log(chatID);
            this.connect();
        };
    }

    disconnect() {
        this.socketRef.close();
    }

    socketNewMessage(data) {
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        // if (Object.keys(this.callbacks).length === 0) {
        //     return;
        // }
        if (command === 'messages') {
            // this.callbacks[command](parsedData.messages);
            this.fetchMessages('me', 4);
        }
        if (command === 'new_message') {
            // this.callbacks[command](parsedData.message);
            this.newChatMessage(parsedData.message);
        }
        const message = parsedData.message;
        this.messages.push({'content': message})
        console.log('scoketNewMessage is called');
        console.log(this.messages);
    }

    fetchMessages(username, chatId) {
        this.sendMessage({
            'command': 'fetch_messages',
            'username': username,
            'chatId': chatId
        });
    }

    newChatMessage(message) {
        this.sendMessage({
            'command': 'new_message',
            'from': message.from,
            'message': message.content,
            'chatId': message.chatId
        });
    }

    addCallbacks(messagesCallback, newMessageCallback) {
        this.callbacks['messages'] = messagesCallback;
        this.callbacks['new_message'] = newMessageCallback;
    }

    sendMessage(message) {
        try {
            this.socketRef.send(JSON.stringify({
                'message': message
            }));
            console.log('new msg sent');
            console.log(message);
            this.msgdata = '';
        } catch (err) {
            console.log(err.message);
        }
    }
    setChatId(id) {
      this.chatID = id;
    }

    state() {
        return this.socketRef.readyState;
    }


}
