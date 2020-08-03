import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) {}
	
	//TODO: revisar si vale la pena crear el servicio http
}
